'use strict';

const util = require('util');

module.exports = {
  fetchAllMeta,
  fetchAll,
  createContract,
  fetchContract,
  fetchContractMeta,
  updateContract,
  patchContract,
  deleteContractById
};

const contracts = [
  {
    "id": "8a4aeb9c-dbfb-46de-bc7d-54467ce90587",
    "title": "first contract",
    "owner": "garigou",
    "startDate": "2017-01-01",
    "endDate": "2017-01-02",
    "terms": [
      {
        "id": "dc8a1adb-cdce-445a-9906-f56b6904b880",
        "title": "common terms",
        "content": "content of the common terms"
      },
      {
        "id": "e8c7eae8-04b8-4642-b569-d62daec3edde",
        "title": "default terms",
        "content": "content of the common terms"
      }
    ]
  },
  {
    "id": "651e5968-8d88-4ed7-9cde-034ac391a41c",
    "title": "second contract",
    "owner": "triboulet",
    "startDate": "2017-05-01",
    "endDate": "2017-12-31",
    "terms": [
      {
        "id": "dc8a1adb-cdce-445a-9906-f56b6904b880",
        "title": "common terms",
        "content": "content of the common terms"
      },
      {
        "id": "e8c7eae8-04b8-4642-b569-d62daec3edde",
        "title": "default terms",
        "content": "content of the common terms"
      }
    ]
  }
];

function fetchAllMeta(request, response, next) {
  request.log.info("Fetching all meta information from the list of contracts");
  response.header('x-nb-entity', 2);
  response.send(contracts);
  return next();
}

function fetchAll(request, response, next) {
  request.log.info("Fetching all contracts from the service API");
  response.send(contracts);
  return next();
}

function createContract(request, response, next) {
  request.log.info('Creating a contract');
  response.status(201);
  response.send({link: '/contracts/{id}'});
  return next();
}

function fetchContract(request, response, next) {
  request.log.info('fetching information about a contract');
  response.status(200);
  response.send(contracts[0]);
  return next();
}

function fetchContractMeta(request, response, next) {
  request.log.info('fetching information about a contract');
  response.status(200);
  response.send(contracts[0]);
  return next();
}

function updateContract(request, response, next) {
  request.log.info('updating the contract');
  response.status(200);
  response.send(contracts[0]);
  return next();
}

function patchContract(request, response, next) {
  request.log.info('updating the contract');
  response.status(200);
  response.send(contracts[0]);
  return next();
}

function deleteContractById(request, response, next) {
  request.log.info('deleting a contract');
  response.status(204);
  return next();
}

