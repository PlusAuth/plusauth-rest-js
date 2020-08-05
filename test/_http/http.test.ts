import { expect } from 'chai';

import { HttpService } from '../../src/http';
import { API_URL } from '../test_constants';

describe('HTTP base class', () => {
  describe('#constructor', function () {
    it('should throw an error when apiURl is missing', function () {
      // @ts-expect-error
      expect(() => new HttpService()).to.throw(Error, '\'apiURL\' must be provided');
    });

    it('should throw an error when the apiURl is not a valid uri', function () {
      expect(() => new HttpService('invalidUri')).
        to.throw(Error, '\'apiUrl\' must be a valid uri');
    });

    it('should throw an error when the headers are not an object', function () {
      // @ts-expect-error
      expect(() => new HttpService(API_URL, 'stringvalue')).
        to.throw(Error, "'headers' must be an object");
    });
  })

  describe('#init', function () {
    const methods = [
      'get',
      'post',
      'patch',
      'delete'
    ];
    const httpService = new HttpService(API_URL);
    expect(httpService).to.have.property('http')

    methods.forEach(function (method) {
      it(`should have http method "${ method }"`, function () {
        // @ts-expect-error
        expect(httpService.http[method]).to.exist.to.be.an.instanceOf(Function);
      });
    });
  });
})
