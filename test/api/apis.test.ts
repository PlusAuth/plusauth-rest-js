import { expect } from 'chai';
import fetchMock from 'fetch-mock';

import sinon from 'sinon';

import { ApiService } from '../../src/api';

import * as fetchWrapper from '../../src/utils/fetch_wrapper';
import { API_URL } from '../test_constants';
import { expectPromise } from '../utils';


const nock = fetchMock.sandbox()
const fetchStub = sinon.stub(fetchWrapper, 'fetchPn').callsFake(nock)

describe('Api Rest Service', () => {
  before(function () {
    this.token = 'testToken'
    this.apis = new ApiService(API_URL, { token: this.token })
  })

  beforeEach(() => {
    nock.reset();
  })

  after(() => {
    fetchStub.restore()
  })

  describe('#getAll', function () {
    it('should return a promise', function (done) {
      expectPromise(this.apis.getAll(), done)
    });

    it('should throw error if fails', function (done) {
      nock.reset();

      const request = nock
        .get(`${ API_URL }/apis`, 500)

      this.apis.getAll().then(() => {
        done(new Error('should not succeed'))
      }).catch(function (err) {
        expect(request.called()).to.be.true;
        expect(err).to.exist;
        done();
      });
    });

    it('should return the body of the response', function (done) {
      const data = [{ name: 'test' }];
      nock.get(`${ API_URL }/apis`, url => ({ status: 200, body: data }))

      this.apis.getAll().then(function (apis) {
        expect(apis).to.be.an.instanceOf(Array);

        expect(apis.length).to.equal(data.length);

        expect(apis[0].name).to.equal(data[0].name);

        done();
      });
    });

    it('should perform a GET request to /api/v1/apis', function (done) {
      const request = nock.get(`${ API_URL }/apis`, 200)

      this.apis.getAll().then(function () {
        expect(request.done()).to.be.true;
        done();
      });
    });

    it('should include the token in the Authorization header', function (done) {
      const request = nock
        .mock({
          url:     `${ API_URL }/apis`,
          headers: {
            'Authorization': `Bearer ${ this.token }`
          }
        }, 200)

      this.apis.getAll().then(function () {
        expect(request.done()).to.be.true;
        done();
      });
    });

    it('should pass the parameters in the query-string', function (done) {
      const params: any = {
        itemsPerPage: 5,
        offset:       10
      };

      const request = nock.mock({
        url:    `${ API_URL }/apis`,
        method: 'GET',
        query:  params
      }, 200);

      this.apis.getAll(params).then(function () {
        expect(request.called()).to.be.true;
        done();
      });
    });
  });
})
