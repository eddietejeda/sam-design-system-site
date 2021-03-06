/* tslint:disable */ 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FHServiceMock {
  public createOrganization(orgObj, parentPath, parentPathName) {
    return Observable.of({});
  }

  public updateOrganization(orgObj, isMove) {
    return Observable.of({});
  }

  public requestAAC(orgId, isProcure: boolean) {
    return Observable.of(123452);
  }

  public getLandingPage() {
    return Observable.of({
      "orgCount":32,
      "featuredOrg":{
         "orgKey":100006688,
         "a11TacCode":47,
         "agencyName":"General Services Administration",
         "categoryDesc":"DEPARTMENT",
         "categoryId":"CAT-1",
         "cfdaBur":0,
         "cfdaCode":"39",
         "cfdaOmb":23,
         "createdDate":1055289600000,
         "description":"GENERAL SERVICES ADMINISTRATION",
         "fpdsCode":"4700",
         "fpdsOrgId":"4700",
         "cgac":"047",
         "fullParentPath":"100006688",
         "fullParentPathName":"GENERAL SERVICES ADMINISTRATION",
         "isSourceCfda":true,
         "isSourceCwCfda":true,
         "isSourceFpds":true,
         "lastModifiedDate":1055289600000,
         "modStatus":"ACTIVE",
         "name":"GENERAL SERVICES ADMINISTRATION",
         "ombAgencyCode":"23",
         "orgCode":"ORG-1042",
         "sourceCfdaPk":"9eb645ae12f3ff6f0eaa94b8ee10d7c2",
         "summary":"Establishes policy and provides for the Government an economical Information about the Federal government's services, programs, and regulations.",
         "tas2Code":"47",
         "tas3Code":"47",
         "type":"Department/Ind. Agency",
         "level":1,
         "logoUrl":"https://s3.amazonaws.com/iae-federal-organization-icons/100006688.jpg",
         "code":"4700",
         "orgAddresses":[
            {
               "addressKey":100272441,
               "city":"",
               "countryCode":"US",
               "createdBy":"c8a7096908cb924969dd1122a0fd9b2d",
               "createdDate":1208882030000,
               "isSourceCfda":true,
               "lastModifiedBy":"3ba0cb09903a48e06a20d00e6df474ec",
               "lastModifiedDate":1445442452000,
               "state":"",
               "streetAddress":"",
               "type":"M",
               "zipcode":""
            }
         ],
         "orgOfficeTypes":[
   
         ],
         "hierarchy":[
   
         ],
         "l1Name":"GENERAL SERVICES ADMINISTRATION",
         "l1OrgKey":100006688,
         "_links":{
            "self":{
               "href":"https://api.sam.gov/comp/v1/organizations?orgKey=100006688&hasFpds=false"
            },
            "logo":{
               "href":"https://s3.amazonaws.com/iae-federal-organization-icons/100006688.jpg"
            },
            "admin":{
               "href":"https://api.sam.gov/comp/v1/organizations?orgKey=100006688&hasFpds=false"
            }
         }
      },
      "orgList":[
         {
            "orgKey":100120624,
            "cgac":"047",
            "fullParentPath":"100006688.100120624",
            "modStatus":"ACTIVE",
            "name":"FEDERAL ACQUISITION SERVICE",
            "parentOrgKey":100006688,
            "type":"Sub-Tier",
            "level":2,
            "orgAddresses":[
   
            ],
            "orgOfficeTypes":[
   
            ],
            "hierarchy":[
   
            ],
            "l1OrgKey":100006688,
            "l2OrgKey":100120624,
            "_links":{
               "admin":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=100120624&hasFpds=false"
               },
               "self":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=100120624&hasFpds=false"
               }
            }
         },
         {
            "orgKey":300000230,
            "cgac":"047",
            "fullParentPath":"100006688.300000230",
            "modStatus":"ACTIVE",
            "name":"FEDERAL PROPERTY RESOURCES SERVICE",
            "parentOrgKey":100006688,
            "type":"Sub-Tier",
            "level":2,
            "orgAddresses":[
   
            ],
            "orgOfficeTypes":[
   
            ],
            "hierarchy":[
   
            ],
            "l1OrgKey":100006688,
            "l2OrgKey":300000230,
            "_links":{
               "admin":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=300000230&hasFpds=false"
               },
               "self":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=300000230&hasFpds=false"
               }
            }
         },
         {
            "orgKey":300000221,
            "cgac":"047",
            "fullParentPath":"100006688.300000221",
            "modStatus":"ACTIVE",
            "name":"GENERAL SERVICES ADMINISTRATION",
            "parentOrgKey":100006688,
            "type":"Sub-Tier",
            "level":2,
            "orgAddresses":[
   
            ],
            "orgOfficeTypes":[
   
            ],
            "hierarchy":[
   
            ],
            "l1OrgKey":100006688,
            "l2OrgKey":300000221,
            "_links":{
               "admin":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=300000221&hasFpds=false"
               },
               "self":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=300000221&hasFpds=false"
               }
            }
         },
         {
            "orgKey":100173615,
            "cgac":"047",
            "fullParentPath":"100006688.100173615",
            "modStatus":"ACTIVE",
            "name":"GSA BOARD OF CONTRACT APPEALS",
            "parentOrgKey":100006688,
            "type":"Sub-Tier",
            "level":2,
            "orgAddresses":[
   
            ],
            "orgOfficeTypes":[
   
            ],
            "hierarchy":[
   
            ],
            "l1OrgKey":100006688,
            "l2OrgKey":100173615,
            "_links":{
               "admin":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=100173615&hasFpds=false"
               },
               "self":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=100173615&hasFpds=false"
               }
            }
         },
         {
            "orgKey":300000222,
            "cgac":"047",
            "fullParentPath":"100006688.300000222",
            "modStatus":"ACTIVE",
            "name":"IMMEDIATE OFFICE OF THE ADMINISTRATOR",
            "parentOrgKey":100006688,
            "type":"Sub-Tier",
            "level":2,
            "orgAddresses":[
   
            ],
            "orgOfficeTypes":[
   
            ],
            "hierarchy":[
   
            ],
            "l1OrgKey":100006688,
            "l2OrgKey":300000222,
            "_links":{
               "admin":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=300000222&hasFpds=false"
               },
               "self":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=300000222&hasFpds=false"
               }
            }
         },
         {
            "orgKey":300000224,
            "cgac":"047",
            "fullParentPath":"100006688.300000224",
            "modStatus":"ACTIVE",
            "name":"INFORMATION SECURITY OVERSIGHT OFFICE",
            "parentOrgKey":100006688,
            "type":"Sub-Tier",
            "level":2,
            "orgAddresses":[
   
            ],
            "orgOfficeTypes":[
   
            ],
            "hierarchy":[
   
            ],
            "l1OrgKey":100006688,
            "l2OrgKey":300000224,
            "_links":{
               "admin":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=300000224&hasFpds=false"
               },
               "self":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=300000224&hasFpds=false"
               }
            }
         },
         {
            "orgKey":300000228,
            "cgac":"047",
            "fullParentPath":"100006688.300000228",
            "modStatus":"ACTIVE",
            "name":"INFORMATION TECHNOLOGY SERVICE",
            "parentOrgKey":100006688,
            "type":"Sub-Tier",
            "level":2,
            "orgAddresses":[
   
            ],
            "orgOfficeTypes":[
   
            ],
            "hierarchy":[
   
            ],
            "l1OrgKey":100006688,
            "l2OrgKey":300000228,
            "_links":{
               "admin":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=300000228&hasFpds=false"
               },
               "self":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=300000228&hasFpds=false"
               }
            }
         },
         {
            "orgKey":300000226,
            "cgac":"047",
            "fullParentPath":"100006688.300000226",
            "modStatus":"ACTIVE",
            "name":"OFFICE OF ACQUISITION POLICY",
            "parentOrgKey":100006688,
            "type":"Sub-Tier",
            "level":2,
            "orgAddresses":[
   
            ],
            "orgOfficeTypes":[
   
            ],
            "hierarchy":[
   
            ],
            "l1OrgKey":100006688,
            "l2OrgKey":300000226,
            "_links":{
               "admin":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=300000226&hasFpds=false"
               },
               "self":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=300000226&hasFpds=false"
               }
            }
         },
         {
            "orgKey":100167208,
            "cgac":"047",
            "fullParentPath":"100006688.100167208",
            "modStatus":"ACTIVE",
            "name":"OFFICE OF ADMINISTRATIVE SERVICES",
            "parentOrgKey":100006688,
            "type":"Sub-Tier",
            "level":2,
            "orgAddresses":[
   
            ],
            "orgOfficeTypes":[
   
            ],
            "hierarchy":[
   
            ],
            "l1OrgKey":100006688,
            "l2OrgKey":100167208,
            "_links":{
               "admin":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=100167208&hasFpds=false"
               },
               "self":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=100167208&hasFpds=false"
               }
            }
         },
         {
            "orgKey":300000232,
            "cgac":"047",
            "fullParentPath":"100006688.300000232",
            "modStatus":"ACTIVE",
            "name":"OFFICE OF CHILDCARE",
            "parentOrgKey":100006688,
            "type":"Sub-Tier",
            "level":2,
            "orgAddresses":[
   
            ],
            "orgOfficeTypes":[
   
            ],
            "hierarchy":[
   
            ],
            "l1OrgKey":100006688,
            "l2OrgKey":300000232,
            "_links":{
               "admin":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=300000232&hasFpds=false"
               },
               "self":{
                  "href":"https://api.sam.gov/comp/v1/organizations?orgKey=300000232&hasFpds=false"
               }
            }
         }
      ],
      "deptAdminList":[
   
      ],
      "agencyAdminList":[
   
      ],
      "officeAdminList":[
   
      ],
      "_links":{
         "self":{
            "href":"https://api.sam.gov/comp/v2/landingPage?myOrg=false&status=Active&orderBy=name&sortBy=asc&pageNum=1&limit=10&typeLookUp=true"
         },
         "my_org":{
            "href":"https://api.sam.gov/comp/v2/landingPage?myOrg=false&status=Active&orderBy=name&sortBy=asc&pageNum=1&limit=10&typeLookUp=true"
         }
      }
   });
  }

  public getFHWidgetInfo(type: 'completed' | 'scheduled') {
    const completed = { "startCount": 20, "endCount": 1, "_links": { "Dept/Ind Agency": { "href": "https://api.sam.gov:443/comp/v2/FHWidget?type=completed&days=90" }, "self": { "href": "https://api.sam.gov:443/comp/v2/FHWidget?type=completed&days=90" } } };
    const scheduled = { "startCount": 9, "endCount": 3, "_links": { "Dept/Ind Agency": { "href": "https://api.sam.gov:443/comp/v2/FHWidget?type=scheduled&days=0" }, "self": { "href": "https://api.sam.gov:443/comp/v2/FHWidget?type=scheduled&days=0" } } };

    if (type === 'completed') {
      return Observable.of(completed);
    }

    if (type === 'scheduled') {
      return Observable.of(scheduled);
    }

    return Observable.of(completed);
  }

  public search() {
    return Observable.of({
      "_embedded":{
         "results":[
            {
               "alternativeNames":null,
               "suggestion":"office of the secretary of the army",
               "_rScore":100,
               "name":"OFFICE OF THE SECRETARY OF THE ARMY",
               "cgac":null,
               "_type":"federalOrganization",
               "organizationHierarchy":[
                  {
                     "organizationId":100000000,
                     "level":1,
                     "name":"DEPT OF DEFENSE"
                  },
                  {
                     "organizationId":100532550,
                     "level":2,
                     "name":"OFFICE OF THE SECRETARY OF THE ARMY"
                  }
               ],
               "description":null,
               "_id":"100532550",
               "type":"AGENCY",
               "shortName":null,
               "isActive":true
            },
            {
               "alternativeNames":[
                  "Comptroller of the Currency (OCC)"
               ],
               "suggestion":"office of the comptroller of the currency",
               "_rScore":100,
               "name":"OFFICE OF THE COMPTROLLER OF THE CURRENCY",
               "cgac":"020",
               "_type":"federalOrganization",
               "organizationHierarchy":[
                  {
                     "organizationId":100013311,
                     "level":1,
                     "name":"TREASURY, DEPARTMENT OF THE"
                  },
                  {
                     "organizationId":100126173,
                     "level":2,
                     "name":"OFFICE OF THE COMPTROLLER OF THE CURRENCY"
                  }
               ],
               "description":null,
               "_id":"100126173",
               "type":"AGENCY",
               "shortName":"",
               "isActive":true
            },
            {
               "alternativeNames":[
                  "Office of the Secretary"
               ],
               "suggestion":"office of the secretary of the interior",
               "_rScore":100,
               "name":"OFFICE OF THE SECRETARY OF THE INTERIOR",
               "cgac":"014",
               "_type":"federalOrganization",
               "organizationHierarchy":[
                  {
                     "organizationId":100010393,
                     "level":1,
                     "name":"INTERIOR, DEPARTMENT OF THE"
                  },
                  {
                     "organizationId":100039377,
                     "level":2,
                     "name":"OFFICE OF THE SECRETARY OF THE INTERIOR"
                  }
               ],
               "description":null,
               "_id":"100039377",
               "type":"AGENCY",
               "shortName":"",
               "isActive":true
            },
            {
               "alternativeNames":null,
               "suggestion":"interior, department of the",
               "_rScore":94,
               "name":"INTERIOR, DEPARTMENT OF THE",
               "cgac":null,
               "_type":"federalOrganization",
               "organizationHierarchy":[
                  {
                     "organizationId":100529002,
                     "level":1,
                     "name":"INTERIOR, DEPARTMENT OF THE"
                  }
               ],
               "description":null,
               "_id":"100529002",
               "type":"DEPARTMENT",
               "shortName":null,
               "isActive":true
            },
            {
               "alternativeNames":[
                  "Department of the Treasury"
               ],
               "suggestion":"treasury, department of the",
               "_rScore":94,
               "name":"TREASURY, DEPARTMENT OF THE",
               "cgac":"020",
               "_type":"federalOrganization",
               "organizationHierarchy":[
                  {
                     "organizationId":100013311,
                     "level":1,
                     "name":"TREASURY, DEPARTMENT OF THE"
                  }
               ],
               "description":"The Department of the Treasury's mission of our financial systems. \n\n",
               "_id":"100013311",
               "type":"DEPARTMENT",
               "shortName":"",
               "isActive":true
            }
         ]
      },
      "_links":{
         "self":{
            "href":"https://52samdotgovsearchcomp.apps.prod-iae.bsp.gsa.gov/sgs/v1/search?index=fh&index=fh&q=the&q=the&page=0&size=5&size=5"
         }
      },
      "page":{
         "size":5,
         "totalElements":431,
         "totalPages":87,
         "number":0,
         "maxAllowedRecords":10000
      }
   });
  }

  public fhSearch() {
    return this.getDepartments();
  }

  public fhSearchCount() {
    return Observable.of(30);
  }

  public getDepartmentsByStatus() {
    return this.getDepartments();
  }

  public getSearchFilterTypes() {
    return Observable.of(["Dep/Ind Agency", "Sub-Tier", "Office"]);
  }

  public getDepartments() {
    return Observable.of({
      "_embedded": [
         {
            "org": {
               "orgKey": 100040731,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 1064880000000,
               "description": "POSTAL SERVICE",
               "fpdsOrgId": "1800",
               "cgac": "018",
               "fullParentPath": "100040731",
               "fullParentPathName": "POSTAL_SERVICE",
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1152144000000,
               "name": "POSTAL SERVICE",
               "orgCode": "ORG-1146",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1800",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "POSTAL SERVICE",
               "l1OrgKey": 100040731
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100040731"
               }
            }
         },
         {
            "org": {
               "orgKey": 100015186,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "ACTION",
               "fpdsOrgId": "4400",
               "fullParentPath": "100015186",
               "fullParentPathName": "ACTION",
               "isSourceFpds": true,
               "lastModifiedBy": "MIGRATOR",
               "lastModifiedDate": 838684800000,
               "name": "ACTION",
               "orgCode": "ORG-1176",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "4400",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "ACTION",
               "l1OrgKey": 100015186
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100015186"
               }
            }
         },
         {
            "org": {
               "orgKey": 100552452,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1498756407000,
               "description": "THE INSTITUE OF MUSEUM AND LIBRARY SERVICES",
               "fpdsOrgId": "5300",
               "fullParentPath": "100552452",
               "fullParentPathName": "THE_INSTITUE_OF_MUSEUM_AND_LIBRARY_SERVICES",
               "ingestedOn": 1498780800000,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1498757798000,
               "name": "THE INSTITUE OF MUSEUM AND LIBRARY SERVICES",
               "orgCode": "ORG-5582",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "5300",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "THE INSTITUE OF MUSEUM AND LIBRARY SERVICES",
               "l1OrgKey": 100552452
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100552452"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500252,
               "agencyName": "Office of Education",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500252",
               "fullParentPathName": "Office_of_Education",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Office of Education",
               "shortName": "",
               "sourceCfdaPk": "518c7a388ee60221f665d271a02ed38d",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Office of Education",
               "l1OrgKey": 100500252
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500252"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500223,
               "agencyName": "U.S. Postal Service",
               "cfdaCode": "18",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500223",
               "fullParentPathName": "US_Postal_Service",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "U.S. Postal Service",
               "shortName": "",
               "sourceCfdaPk": "1f79e947c46edab2e64cd31f4be62464",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "US Postal Service",
               "l1OrgKey": 100500223
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500223"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500292,
               "agencyName": "Action",
               "cfdaCode": "72",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500292",
               "fullParentPathName": "Action",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "Action",
               "shortName": "",
               "sourceCfdaPk": "ae726b5eb00e8c0501813f668a3fdc45",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Action",
               "l1OrgKey": 100500292
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500292"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500335,
               "agencyName": "Public Health Service - Iii",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500335",
               "fullParentPathName": "Public_Health_Service__Iii",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Public Health Service - Iii",
               "shortName": "",
               "sourceCfdaPk": "f22ed6f1f11478dde57da6b2212fd959",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Public Health Service  Iii",
               "l1OrgKey": 100500335
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500335"
               }
            }
         },
         {
            "org": {
               "orgKey": 100532368,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-3",
               "createdBy": "FPDSADMIN",
               "createdDate": 1145045609000,
               "description": "DEPT OF DEFENSE",
               "fpdsOrgId": "9700",
               "fullParentPath": "100532368",
               "fullParentPathName": "DEPT_OF_DEFENSE",
               "ingestedOn": 1486465462706,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1486413025000,
               "name": "DEPT OF DEFENSE",
               "orgCode": "ORG-1144",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9700",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "DEPT OF DEFENSE",
               "l1OrgKey": 100532368
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100532368"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500311,
               "agencyName": "Public Health Service - I",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500311",
               "fullParentPathName": "Public_Health_Service__I",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Public Health Service - I",
               "shortName": "",
               "sourceCfdaPk": "cf4c1c923decb00afc6309928da9c9f5",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Public Health Service  I",
               "l1OrgKey": 100500311
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500311"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500339,
               "agencyName": "Office of Emergency Preparedness",
               "cfdaCode": "50",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500339",
               "fullParentPathName": "Office_of_Emergency_Preparedness",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "Office of Emergency Preparedness",
               "shortName": "",
               "sourceCfdaPk": "f774c465bb12818df08520bfd106b41e",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Office of Emergency Preparedness",
               "l1OrgKey": 100500339
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500339"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500228,
               "agencyName": "President's Committee on Consumer Interests",
               "cfdaCode": "52",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500228",
               "fullParentPathName": "Presidents_Committee_on_Consumer_Interests",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "President's Committee on Consumer Interests",
               "shortName": "",
               "sourceCfdaPk": "2eca7ba4dd23c2ca73a06c4b90836e43",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Presidents Committee on Consumer Interests",
               "l1OrgKey": 100500228
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500228"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500229,
               "agencyName": "Federal Energy Administration",
               "cfdaCode": "80",
               "createdBy": "",
               "createdDate": 1246980683000,
               "fullParentPath": "100500229",
               "fullParentPathName": "Federal_Energy_Administration",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980683000,
               "name": "Federal Energy Administration",
               "shortName": "",
               "sourceCfdaPk": "2ff9bc3d584edd5687745072015c27f6",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Federal Energy Administration",
               "l1OrgKey": 100500229
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500229"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500312,
               "agencyName": "Federal Home Loan Bank Board",
               "cfdaCode": "71",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500312",
               "fullParentPathName": "Federal_Home_Loan_Bank_Board",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "Federal Home Loan Bank Board",
               "shortName": "",
               "sourceCfdaPk": "d1928d491ab43e3bca4e0678d9f9cab1",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Federal Home Loan Bank Board",
               "l1OrgKey": 100500312
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500312"
               }
            }
         },
         {
            "org": {
               "orgKey": 100070792,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "ADMINISTRATIVE CONFERENCE OF THE U. S.",
               "fpdsOrgId": "9515",
               "cgac": "302",
               "fullParentPath": "100070792",
               "fullParentPathName": "ADMINISTRATIVE_CONFERENCE_OF_THE_U_S",
               "isSourceFpds": true,
               "lastModifiedBy": "DODMIGRATOR",
               "lastModifiedDate": 1143676800000,
               "name": "ADMINISTRATIVE CONFERENCE OF THE U. S.",
               "orgCode": "ORG-1115",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9515",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "ADMINISTRATIVE CONFERENCE OF THE U S",
               "l1OrgKey": 100070792
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100070792"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500204,
               "agencyName": "Farm Credit Administration",
               "cfdaCode": "",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500204",
               "fullParentPathName": "Farm_Credit_Administration",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Farm Credit Administration",
               "shortName": "",
               "sourceCfdaPk": "04659d3fbce6e21377f1f90508117b62",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Farm Credit Administration",
               "l1OrgKey": 100500204
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500204"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500301,
               "agencyName": "Civil Aeronautics Board",
               "cfdaCode": "26",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500301",
               "fullParentPathName": "Civil_Aeronautics_Board",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Civil Aeronautics Board",
               "shortName": "",
               "sourceCfdaPk": "b9552bb3d4a44a55e4aa3eb0f481454c",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Civil Aeronautics Board",
               "l1OrgKey": 100500301
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500301"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500166,
               "a11TacCode": 95,
               "agencyName": "Northern Border Regional Commission",
               "cfdaCode": "90",
               "createdBy": "",
               "fpdsCode": "",
               "fullParentPath": "100500166",
               "fullParentPathName": "NORTHERN_BORDER_REGIONAL_COMMISSION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "lastModifiedBy": "",
               "name": "NORTHERN BORDER REGIONAL COMMISSION",
               "ombAgencyCode": "573",
               "shortName": "",
               "sourceCfdaPk": "0b3c8f472b8052b146ffb4f6a3ae3e10",
               "sourceParentCfdaPk": "",
               "summary": "The Northern Border Regional Commission is a Federal-State governmental agency concerned with the economic well-being of the citizens and businesses within a thirty-six (36) county region of Maine, New Hampshire, New York, and Vermont (12 counties in Maine; 4 counties in New Hampshire, 14 counties in New York, and 6 counties in Vermont).  The region served by the Commission has had chronic and contiguous long-term economic distress. The mission of the Commission is to eliminate these conditions, concentrating its efforts to develop water, sewer, energy and telecommunications infrastructure; providing job skills and employment related education, as well as entrepreneurship, technology and business development; provide basic health care and other public services for those areas that are severely economically distressed and underdeveloped; and to promote resource conservation, tourism, recreation, and preservation of open spaces in a manner consistent with economic development goals; and finally, to promote the development of renewable and alternative energy sources.  ",
               "tas3Code": "573",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "NORTHERN BORDER REGIONAL COMMISSION",
               "l1OrgKey": 100500166
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500166"
               }
            }
         },
         {
            "org": {
               "orgKey": 100014067,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "OFFICE OF PERSONNEL MANAGEMENT",
               "fpdsOrgId": "2400",
               "cgac": "024",
               "fullParentPath": "100014067",
               "fullParentPathName": "OFFICE_OF_PERSONNEL_MANAGEMENT",
               "isSourceFpds": true,
               "lastModifiedBy": "PBOMAN",
               "lastModifiedDate": 1159920000000,
               "name": "OFFICE OF PERSONNEL MANAGEMENT",
               "orgCode": "ORG-1162",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "2400",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "OFFICE OF PERSONNEL MANAGEMENT",
               "l1OrgKey": 100014067
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100014067"
               }
            }
         },
         {
            "org": {
               "orgKey": 100001738,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "UNITED STATES ARMS CONTROL AND DISARMAMENT AGENCY",
               "fpdsOrgId": "9400",
               "fullParentPath": "100001738",
               "fullParentPathName": "UNITED_STATES_ARMS_CONTROL_AND_DISARMAMENT_AGENCY",
               "isSourceFpds": true,
               "lastModifiedBy": "MIGRATOR",
               "lastModifiedDate": 838684800000,
               "name": "UNITED STATES ARMS CONTROL AND DISARMAMENT AGENCY",
               "orgCode": "ORG-1049",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9400",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "UNITED STATES ARMS CONTROL AND DISARMAMENT AGENCY",
               "l1OrgKey": 100001738
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100001738"
               }
            }
         },
         {
            "org": {
               "orgKey": 100035461,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "UNITED STATES INFORMATION AGENCY",
               "fpdsOrgId": "6700",
               "fullParentPath": "100035461",
               "fullParentPathName": "UNITED_STATES_INFORMATION_AGENCY",
               "isSourceFpds": true,
               "lastModifiedBy": "DODMIGRATOR",
               "lastModifiedDate": 1143676800000,
               "name": "UNITED STATES INFORMATION AGENCY",
               "orgCode": "ORG-1014",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "6700",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "UNITED STATES INFORMATION AGENCY",
               "l1OrgKey": 100035461
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100035461"
               }
            }
         },
         {
            "org": {
               "orgKey": 100014960,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "FEDERAL EMERGENCY MANAGEMENT AGENCY",
               "fpdsOrgId": "5800",
               "fullParentPath": "100014960",
               "fullParentPathName": "FEDERAL_EMERGENCY_MANAGEMENT_AGENCY",
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1288224000000,
               "name": "FEDERAL EMERGENCY MANAGEMENT AGENCY",
               "orgCode": "ORG-1016",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "5800",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "FEDERAL EMERGENCY MANAGEMENT AGENCY",
               "l1OrgKey": 100014960
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100014960"
               }
            }
         },
         {
            "org": {
               "orgKey": 100047200,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 1069286400000,
               "description": "AGENCY FOR INTERNATIONAL DEVELOPMENT",
               "fpdsOrgId": "1152",
               "fullParentPath": "100047200",
               "fullParentPathName": "AGENCY_FOR_INTERNATIONAL_DEVELOPMENT",
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1454889600000,
               "name": "AGENCY FOR INTERNATIONAL DEVELOPMENT",
               "orgCode": "ORG-1076",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1152",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "AGENCY FOR INTERNATIONAL DEVELOPMENT",
               "l1OrgKey": 100047200
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100047200"
               }
            }
         },
         {
            "org": {
               "orgKey": 100053227,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 1069286400000,
               "description": "FEDERAL ENERGY REGULATORY COMMISSION",
               "fpdsOrgId": "8961",
               "fullParentPath": "100053227",
               "fullParentPathName": "FEDERAL_ENERGY_REGULATORY_COMMISSION",
               "isSourceFpds": true,
               "lastModifiedBy": "RUIZ23",
               "lastModifiedDate": 1333411200000,
               "name": "FEDERAL ENERGY REGULATORY COMMISSION",
               "orgCode": "ORG-1052",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "8961",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "FEDERAL ENERGY REGULATORY COMMISSION",
               "l1OrgKey": 100053227
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100053227"
               }
            }
         },
         {
            "org": {
               "orgKey": 100070679,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "BOARD FOR INTERNATIONAL BROADCASTING",
               "fpdsOrgId": "9501",
               "fullParentPath": "100070679",
               "fullParentPathName": "BOARD_FOR_INTERNATIONAL_BROADCASTING",
               "isSourceFpds": true,
               "lastModifiedBy": "DODMIGRATOR",
               "lastModifiedDate": 1143676800000,
               "name": "BOARD FOR INTERNATIONAL BROADCASTING",
               "orgCode": "ORG-1050",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9501",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "BOARD FOR INTERNATIONAL BROADCASTING",
               "l1OrgKey": 100070679
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100070679"
               }
            }
         },
         {
            "org": {
               "orgKey": 100076329,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MMCCAIN@NCLIS.GOV",
               "createdDate": 1080518400000,
               "description": "NATIONAL COMMISSION ON LIBRARIES AND INFORMATION SCIENCE",
               "fpdsOrgId": "9527",
               "fullParentPath": "100076329",
               "fullParentPathName": "NATIONAL_COMMISSION_ON_LIBRARIES_AND_INFORMATION_SCIENCE",
               "isSourceFpds": true,
               "lastModifiedBy": "MIGRATOR",
               "lastModifiedDate": 1064880000000,
               "name": "NATIONAL COMMISSION ON LIBRARIES AND INFORMATION SCIENCE",
               "orgCode": "ORG-1123",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9527",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "NATIONAL COMMISSION ON LIBRARIES AND INFORMATION SCIENCE",
               "l1OrgKey": 100076329
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100076329"
               }
            }
         },
         {
            "org": {
               "orgKey": 100093381,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "WJOHNSON@IMLS.GOV",
               "createdDate": 1191196800000,
               "description": "NATIONAL FOUNDATION ON THE ARTS AND THE HUMANITIES",
               "fpdsOrgId": "5900",
               "fullParentPath": "100093381",
               "fullParentPathName": "NATIONAL_FOUNDATION_ON_THE_ARTS_AND_THE_HUMANITIES",
               "isSourceFpds": true,
               "lastModifiedBy": "WJOHNSON@IMLS.GOV",
               "lastModifiedDate": 1191456000000,
               "name": "NATIONAL FOUNDATION ON THE ARTS AND THE HUMANITIES",
               "orgCode": "ORG-1005",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "5900",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "NATIONAL FOUNDATION ON THE ARTS AND THE HUMANITIES",
               "l1OrgKey": 100093381
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100093381"
               }
            }
         },
         {
            "org": {
               "orgKey": 100109423,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "DIANAFORTI@IBWC.GOV",
               "createdDate": 1243382400000,
               "description": "INTERNATIONAL BOUNDARY AND WATER COMMISSION: U.S.-MEXICO",
               "fpdsOrgId": "19BM",
               "fullParentPath": "100109423",
               "fullParentPathName": "INTERNATIONAL_BOUNDARY_AND_WATER_COMMISSION_USMEXICO",
               "isSourceFpds": true,
               "lastModifiedBy": "DIANAFORTI@IBWC.GOV",
               "lastModifiedDate": 1243382400000,
               "name": "INTERNATIONAL BOUNDARY AND WATER COMMISSION: U.S.-MEXICO",
               "orgCode": "ORG-4303",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "19BM",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "INTERNATIONAL BOUNDARY AND WATER COMMISSION USMEXICO",
               "l1OrgKey": 100109423
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100109423"
               }
            }
         },
         {
            "org": {
               "orgKey": 100140115,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "00.MICHELLE.COLEMAN@GSA.GOV",
               "createdDate": 1371600000000,
               "description": "FEDERAL PUBLIC DEFENDERS",
               "fpdsOrgId": "1023",
               "fullParentPath": "100140115",
               "fullParentPathName": "FEDERAL_PUBLIC_DEFENDERS",
               "isSourceFpds": true,
               "lastModifiedBy": "GSA_HELPDESK",
               "lastModifiedDate": 1371686400000,
               "name": "FEDERAL PUBLIC DEFENDERS",
               "orgCode": "ORG-1105",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1023",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "FEDERAL PUBLIC DEFENDERS",
               "l1OrgKey": 100140115
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100140115"
               }
            }
         },
         {
            "org": {
               "orgKey": 100150357,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "RSIMMS@USTAXCOURT.GOV",
               "createdDate": 1424390400000,
               "description": "U.S. TAX COURT",
               "fpdsOrgId": "2300",
               "cgac": "023",
               "fullParentPath": "100150357",
               "fullParentPathName": "US_TAX_COURT",
               "isSourceFpds": true,
               "lastModifiedBy": "RSIMMS@USTAXCOURT.GOV",
               "lastModifiedDate": 1424390400000,
               "name": "U.S. TAX COURT",
               "orgCode": "ORG-1161",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "2300",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "US TAX COURT",
               "l1OrgKey": 100150357
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100150357"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500256,
               "agencyName": "Public Health Service",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500256",
               "fullParentPathName": "Public_Health_Service",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Public Health Service",
               "shortName": "",
               "sourceCfdaPk": "5d160c60c21c5ebd77f86f33c3e19ad3",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Public Health Service",
               "l1OrgKey": 100500256
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500256"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500321,
               "agencyName": "Four Corners Regional Commission",
               "cfdaCode": "38",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500321",
               "fullParentPathName": "Four_Corners_Regional_Commission",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "Four Corners Regional Commission",
               "shortName": "",
               "sourceCfdaPk": "df03a4f78e06ebf3b14e350c380ddd8e",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Four Corners Regional Commission",
               "l1OrgKey": 100500321
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500321"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500322,
               "agencyName": "Upper Great Lakes Regional Commission",
               "cfdaCode": "63",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500322",
               "fullParentPathName": "Upper_Great_Lakes_Regional_Commission",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "Upper Great Lakes Regional Commission",
               "shortName": "",
               "sourceCfdaPk": "df3a2d81a5d33af11c33c171ad5bb8e2",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Upper Great Lakes Regional Commission",
               "l1OrgKey": 100500322
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500322"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500332,
               "agencyName": "Coastal Plains Regional Commission",
               "cfdaCode": "28",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500332",
               "fullParentPathName": "Coastal_Plains_Regional_Commission",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Coastal Plains Regional Commission",
               "shortName": "",
               "sourceCfdaPk": "ecf930c2330242f5f155807c3c4e845b",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Coastal Plains Regional Commission",
               "l1OrgKey": 100500332
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500332"
               }
            }
         },
         {
            "org": {
               "orgKey": 100187953,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459555200000,
               "description": "INTERNATIONAL TRADE COMMISSION",
               "fpdsOrgId": "3400",
               "cgac": "034",
               "fullParentPath": "100187953",
               "fullParentPathName": "INTERNATIONAL_TRADE_COMMISSION",
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1459641600000,
               "name": "INTERNATIONAL TRADE COMMISSION",
               "orgCode": "ORG-1172",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "3400",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "INTERNATIONAL TRADE COMMISSION",
               "l1OrgKey": 100187953
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100187953"
               }
            }
         },
         {
            "org": {
               "orgKey": 100243895,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "PENNSYLVANIA AVENUE DEVELOPMENT CORPORATION",
               "fpdsOrgId": "4200",
               "fullParentPath": "100243895",
               "fullParentPathName": "PENNSYLVANIA_AVENUE_DEVELOPMENT_CORPORATION",
               "isSourceFpds": true,
               "lastModifiedBy": "MIGRATOR",
               "lastModifiedDate": 838684800000,
               "name": "PENNSYLVANIA AVENUE DEVELOPMENT CORPORATION",
               "orgCode": "ORG-1175",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "4200",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "PENNSYLVANIA AVENUE DEVELOPMENT CORPORATION",
               "l1OrgKey": 100243895
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100243895"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500257,
               "agencyName": "Office of Community Services",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500257",
               "fullParentPathName": "Office_of_Community_Services",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Office of Community Services",
               "shortName": "",
               "sourceCfdaPk": "5e8ac5057b6086b91b06c914db8306f1",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Office of Community Services",
               "l1OrgKey": 100500257
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500257"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500155,
               "a11TacCode": 46,
               "agencyName": "Appalachian Regional Commission",
               "cfdaBur": 0,
               "cfdaCode": "23",
               "cfdaOmb": 309,
               "createdBy": "",
               "fpdsCode": "",
               "fullParentPath": "100500155",
               "fullParentPathName": "APPALACHIAN_REGIONAL_COMMISSION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "lastModifiedBy": "",
               "name": "APPALACHIAN REGIONAL COMMISSION",
               "ombAgencyCode": "309",
               "shortName": "",
               "sourceCfdaPk": "4ce47db8594f7f192b290fae45383de3",
               "sourceParentCfdaPk": "",
               "summary": "The Appalachian Regional Commission is a Federal-State governmental agency concerned with the economic, physical, and social development of the 13-State Appalachian region, which includes parts of Alabama, Georgia, Kentucky, Maryland, Mississippi, New York, North Carolina, Ohio, Pennsylvania, South Carolina, Tennessee, Virginia, and all of West Virginia.  The comprehensive goals of the Commission are to provide the people of Appalachia with the health and skills they need to compete for opportunities and to develop a self-sustaining economy and environment capable of supporting a population with rising incomes and standards of living and increasing employment opportunities.  To accomplish this task, the Commission has concentrated on areas of development in which there remain great needs throughout the region:  community development and housing, education, the environment, health and child development, industrial development and management, tourism, and transportation.",
               "tas3Code": "309",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "APPALACHIAN REGIONAL COMMISSION",
               "l1OrgKey": 100500155
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500155"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500157,
               "a11TacCode": 76,
               "agencyName": "Christopher Columbus Fellowship Foundation",
               "cfdaBur": 0,
               "cfdaCode": "85",
               "cfdaOmb": 465,
               "createdBy": "",
               "fpdsCode": "",
               "fullParentPath": "100500157",
               "fullParentPathName": "CHRISTOPHER_COLUMBUS_FELLOWSHIP_FOUNDATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "lastModifiedBy": "",
               "name": "CHRISTOPHER COLUMBUS FELLOWSHIP FOUNDATION",
               "ombAgencyCode": "465",
               "shortName": "",
               "sourceCfdaPk": "7c7669fc170dad2e5e1213bee0864112",
               "sourceParentCfdaPk": "",
               "summary": "Established by Congress in 1992 to award fellowships to encourage and support research, study, and labor designed to produce new discoveries in all fields of endeavor for the benefit of mankind. ",
               "tas3Code": "465",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "CHRISTOPHER COLUMBUS FELLOWSHIP FOUNDATION",
               "l1OrgKey": 100500157
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500157"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500158,
               "a11TacCode": 95,
               "agencyName": "Delta Regional Authority",
               "cfdaCode": "",
               "fpdsCode": "",
               "fullParentPath": "100500158",
               "fullParentPathName": "DELTA_REGIONAL_AUTHORITY",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "name": "DELTA REGIONAL AUTHORITY",
               "ombAgencyCode": "517",
               "shortName": "",
               "sourceCfdaPk": "6a6659268b419ba7a2323dfea2e11a78",
               "sourceParentCfdaPk": "fc1984c2a4d67a242805fe9ea68de427",
               "tas3Code": "517",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "DELTA REGIONAL AUTHORITY",
               "l1OrgKey": 100500158
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500158"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500210,
               "agencyName": "Office of Intergovernmental Relations",
               "cfdaCode": "51",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500210",
               "fullParentPathName": "Office_of_Intergovernmental_Relations",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "Office of Intergovernmental Relations",
               "shortName": "",
               "sourceCfdaPk": "115c2b9589c169184569808b28574eab",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Office of Intergovernmental Relations",
               "l1OrgKey": 100500210
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500210"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500234,
               "agencyName": "Commission on the Bicentennial of the U.S. Constitution",
               "cfdaCode": "90",
               "createdBy": "",
               "createdDate": 1246980683000,
               "fullParentPath": "100500234",
               "fullParentPathName": "Commission_on_the_Bicentennial_of_the_US_Constitution",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1261069904000,
               "name": "Commission on the Bicentennial of the U.S. Constitution",
               "shortName": "",
               "sourceCfdaPk": "38a30265ad1ac7fe86c68bc05de40c5f",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Commission on the Bicentennial of the US Constitution",
               "l1OrgKey": 100500234
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500234"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500203,
               "agencyName": "President's Committee on Mental Retardation",
               "cfdaCode": "54",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500203",
               "fullParentPathName": "Presidents_Committee_on_Mental_Retardation",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "President's Committee on Mental Retardation",
               "shortName": "",
               "sourceCfdaPk": "012b821b6cf7e3dcde79fe6fb6f5f8be",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Presidents Committee on Mental Retardation",
               "l1OrgKey": 100500203
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500203"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500207,
               "agencyName": "Bureau of Community Health Services",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500207",
               "fullParentPathName": "Bureau_of_Community_Health_Services",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Bureau of Community Health Services",
               "shortName": "",
               "sourceCfdaPk": "0afe62d42558a5c82819b491ebf89541",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Bureau of Community Health Services",
               "l1OrgKey": 100500207
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500207"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500209,
               "agencyName": "United States Information Agency",
               "cfdaCode": "82",
               "createdBy": "",
               "createdDate": 1246980680000,
               "fullParentPath": "100500209",
               "fullParentPathName": "United_States_Information_Agency",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980680000,
               "name": "United States Information Agency",
               "shortName": "",
               "sourceCfdaPk": "0d156bca9a8fd19bc7a5b9adbcb08f2b",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "United States Information Agency",
               "l1OrgKey": 100500209
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500209"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500211,
               "agencyName": "Advisory Commission on Intergovernmental Relations",
               "cfdaCode": "22",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500211",
               "fullParentPathName": "Advisory_Commission_on_Intergovernmental_Relations",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Advisory Commission on Intergovernmental Relations",
               "shortName": "",
               "sourceCfdaPk": "122d5a2763677704ae06a58b1cc1aa59",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Advisory Commission on Intergovernmental Relations",
               "l1OrgKey": 100500211
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500211"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500216,
               "agencyName": "Community Services Administration",
               "cfdaCode": "49",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500216",
               "fullParentPathName": "Community_Services_Administration",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "Community Services Administration",
               "shortName": "",
               "sourceCfdaPk": "4491dec6a6fe5ec068323c61cac6e7e0",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Community Services Administration",
               "l1OrgKey": 100500216
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500216"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500236,
               "agencyName": "Office of Human Development Services",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500236",
               "fullParentPathName": "Office_of_Human_Development_Services",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Office of Human Development Services",
               "shortName": "",
               "sourceCfdaPk": "3b4a239212a8148a5cea23f9e996b1af",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Office of Human Development Services",
               "l1OrgKey": 100500236
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500236"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500220,
               "agencyName": "Bureau of Radiological Health",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500220",
               "fullParentPathName": "Bureau_of_Radiological_Health",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Bureau of Radiological Health",
               "shortName": "",
               "sourceCfdaPk": "1d881c44ca6acc22e94974dfea133642",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Bureau of Radiological Health",
               "l1OrgKey": 100500220
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500220"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500221,
               "agencyName": "Office of Human Development Services",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500221",
               "fullParentPathName": "Office_of_Human_Development_Services",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Office of Human Development Services",
               "shortName": "",
               "sourceCfdaPk": "1e8de33544265a51b889abec7fc17b66",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Office of Human Development Services",
               "l1OrgKey": 100500221
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500221"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500224,
               "agencyName": "Old West Regional Commission",
               "cfdaCode": "75",
               "createdBy": "",
               "createdDate": 1246980683000,
               "fullParentPath": "100500224",
               "fullParentPathName": "Old_West_Regional_Commission",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980683000,
               "name": "Old West Regional Commission",
               "shortName": "",
               "sourceCfdaPk": "7e81e81ab99ad63fe7a5b323eb424041",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Old West Regional Commission",
               "l1OrgKey": 100500224
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500224"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500244,
               "agencyName": "Ozarks Regional Action Planning Commission",
               "cfdaCode": "52",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500244",
               "fullParentPathName": "Ozarks_Regional_Action_Planning_Commission",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "Ozarks Regional Action Planning Commission",
               "shortName": "",
               "sourceCfdaPk": "47a0491564d495b51cd8d428b3f22959",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Ozarks Regional Action Planning Commission",
               "l1OrgKey": 100500244
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500244"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500226,
               "agencyName": "National Institute of Education",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500226",
               "fullParentPathName": "National_Institute_of_Education",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "National Institute of Education",
               "shortName": "",
               "sourceCfdaPk": "298952a7da90ed7d8aa5382eb2051e8b",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "National Institute of Education",
               "l1OrgKey": 100500226
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500226"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500230,
               "agencyName": "American Revolution Bicentennial Administration",
               "cfdaCode": "74",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500230",
               "fullParentPathName": "American_Revolution_Bicentennial_Administration",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "American Revolution Bicentennial Administration",
               "shortName": "",
               "sourceCfdaPk": "301b124763914a642122f4cd10b4c911",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "American Revolution Bicentennial Administration",
               "l1OrgKey": 100500230
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500230"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500255,
               "agencyName": "Office of the Assistant Secretary for Health",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500255",
               "fullParentPathName": "Office_of_the_Assistant_Secretary_for_Health",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Office of the Assistant Secretary for Health",
               "shortName": "",
               "sourceCfdaPk": "5ce3ac50f6ed0d3e50f8ef08f7c1e69a",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Office of the Assistant Secretary for Health",
               "l1OrgKey": 100500255
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500255"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500237,
               "agencyName": "Federal Maritime Commission",
               "cfdaBur": 0,
               "cfdaCode": "33",
               "cfdaOmb": 366,
               "createdBy": "",
               "createdDate": 1241192143000,
               "fullParentPath": "100500237",
               "fullParentPathName": "Federal_Maritime_Commission",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1241192143000,
               "name": "Federal Maritime Commission",
               "shortName": "",
               "sourceCfdaPk": "3c956819911d3da41bde947d48d269ab",
               "sourceParentCfdaPk": "",
               "summary": "Regulates the waterborne foreign and domestic offshore commerce of the United States, assures that United States international trade is open to all nations on fair and equitable terms, and protects against unauthorized, concerted activity in the waterborne commerce of the United States. This is accomplished through maintaining surveillance over steamship conferences and common carriers by water; assuring that only the rates on file with the Commission are charged; conducting analysis and appropriate disposition of agreements between persons subject to the Shipping Act of 1984 and the Shipping Act, 1916; guaranteeing equal treatment to shippers, carriers, and other persons subject to the shipping statutes; and ensuring that adequate levels of financial responsibility are maintained for indemnification of passengers.",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Federal Maritime Commission",
               "l1OrgKey": 100500237
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500237"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500238,
               "agencyName": "National Institute of Occupational Safety and Health",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500238",
               "fullParentPathName": "National_Institute_of_Occupational_Safety_and_Health",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "National Institute of Occupational Safety and Health",
               "shortName": "",
               "sourceCfdaPk": "3ca9a66067e81ff8d209c79150932f0a",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "National Institute of Occupational Safety and Health",
               "l1OrgKey": 100500238
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500238"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500239,
               "agencyName": "Pacific Northwest Regional Commission",
               "cfdaCode": "76",
               "createdBy": "",
               "createdDate": 1246980683000,
               "fullParentPath": "100500239",
               "fullParentPathName": "Pacific_Northwest_Regional_Commission",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980683000,
               "name": "Pacific Northwest Regional Commission",
               "shortName": "",
               "sourceCfdaPk": "3ce8fde893920e766ab767eb227efd33",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Pacific Northwest Regional Commission",
               "l1OrgKey": 100500239
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500239"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500240,
               "agencyName": "International Trade Commission",
               "cfdaCode": "61",
               "createdBy": "",
               "createdDate": 1246980679000,
               "fullParentPath": "100500240",
               "fullParentPathName": "International_Trade_Commission",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980679000,
               "name": "International Trade Commission",
               "shortName": "",
               "sourceCfdaPk": "40a126b5f5b96f8cddf761b26a8becbb",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "International Trade Commission",
               "l1OrgKey": 100500240
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500240"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500243,
               "agencyName": "Office of the Assistant Secretary for Education",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500243",
               "fullParentPathName": "Office_of_the_Assistant_Secretary_for_Education",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Office of the Assistant Secretary for Education",
               "shortName": "",
               "sourceCfdaPk": "47697afaacf2eb46eef99aae1f8a4ce3",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Office of the Assistant Secretary for Education",
               "l1OrgKey": 100500243
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500243"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500247,
               "agencyName": "President's Committee on Employment of People With Disabilities",
               "cfdaCode": "53",
               "createdBy": "",
               "createdDate": 1246980679000,
               "fullParentPath": "100500247",
               "fullParentPathName": "Presidents_Committee_on_Employment_of_People_With_Disabilities",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980679000,
               "name": "President's Committee on Employment of People With Disabilities",
               "shortName": "",
               "sourceCfdaPk": "4b4caad4b9de3c3045197b507062e7b6",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Presidents Committee on Employment of People With Disabilities",
               "l1OrgKey": 100500247
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500247"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500268,
               "agencyName": "Special Action Office for Drug Abuse Prevention",
               "cfdaCode": "73",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500268",
               "fullParentPathName": "Special_Action_Office_for_Drug_Abuse_Prevention",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "Special Action Office for Drug Abuse Prevention",
               "shortName": "",
               "sourceCfdaPk": "7a17e9d49e158807fe3b3e720422ff86",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Special Action Office for Drug Abuse Prevention",
               "l1OrgKey": 100500268
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500268"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500249,
               "agencyName": "Office of the Assistant Secretary for Health",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500249",
               "fullParentPathName": "Office_of_the_Assistant_Secretary_for_Health",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Office of the Assistant Secretary for Health",
               "shortName": "",
               "sourceCfdaPk": "4e2fef36dbed5b4ae7ab56c513410479",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Office of the Assistant Secretary for Health",
               "l1OrgKey": 100500249
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500249"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500259,
               "agencyName": "Office of the Secretary",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500259",
               "fullParentPathName": "Office_of_the_Secretary",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Office of the Secretary",
               "shortName": "",
               "sourceCfdaPk": "5f1011eb9cae76be3f81e91bdce3a7f8",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Office of the Secretary",
               "l1OrgKey": 100500259
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500259"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500263,
               "agencyName": "Cabinet Committee on Opportunities for Spanish-speaking People",
               "cfdaCode": "25",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500263",
               "fullParentPathName": "Cabinet_Committee_on_Opportunities_for_Spanishspeaking_People",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Cabinet Committee on Opportunities for Spanish-speaking People",
               "shortName": "",
               "sourceCfdaPk": "6f6d1942f577f1e013fbba0004b7b027",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Cabinet Committee on Opportunities for Spanishspeaking People",
               "l1OrgKey": 100500263
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500263"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500265,
               "agencyName": "Southwest Border Regional Commission",
               "cfdaCode": "79",
               "createdBy": "",
               "createdDate": 1246980683000,
               "fullParentPath": "100500265",
               "fullParentPathName": "Southwest_Border_Regional_Commission",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980683000,
               "name": "Southwest Border Regional Commission",
               "shortName": "",
               "sourceCfdaPk": "71f7e13f6e86744507a315470bae8928",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Southwest Border Regional Commission",
               "l1OrgKey": 100500265
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500265"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500266,
               "agencyName": "Water Resources Council",
               "cfdaCode": "65",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500266",
               "fullParentPathName": "Water_Resources_Council",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "Water Resources Council",
               "shortName": "",
               "sourceCfdaPk": "733c78cae0ca1a3316a315c0fee90926",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Water Resources Council",
               "l1OrgKey": 100500266
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500266"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500267,
               "agencyName": "Office of Consumer Affairs",
               "cfdaCode": "69",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500267",
               "fullParentPathName": "Office_of_Consumer_Affairs",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "Office of Consumer Affairs",
               "shortName": "",
               "sourceCfdaPk": "73fb5841cef88ff5993d23192045cace",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Office of Consumer Affairs",
               "l1OrgKey": 100500267
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500267"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500271,
               "agencyName": "U.S. Commission on Civil Rights",
               "cfdaBur": 0,
               "cfdaCode": "29",
               "cfdaOmb": 326,
               "createdBy": "",
               "createdDate": 1205416386000,
               "fullParentPath": "100500271",
               "fullParentPathName": "US_Commission_on_Civil_Rights",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1444320880000,
               "name": "U.S. Commission on Civil Rights",
               "shortName": "",
               "sourceCfdaPk": "80543289c19357b88928efaa0085a34f",
               "sourceParentCfdaPk": "",
               "summary": " Collects and studies information on discrimination or denials of equal protection of the laws because of race, color, religion, sex, age, disability or, national origin, or in the administration of justice in such areas as voting rights, enforcement of Federal civil rights laws, and equality of opportunity in education, employment, and housing.",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [
                  {
                     "addressKey": 100272428,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "036016aa5b797617c6023036f5c2df78",
                     "createdDate": 1444318501000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320880000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "US Commission on Civil Rights",
               "l1OrgKey": 100500271
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500271"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500273,
               "agencyName": "Atomic Energy Commission",
               "cfdaCode": "24",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500273",
               "fullParentPathName": "Atomic_Energy_Commission",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Atomic Energy Commission",
               "shortName": "",
               "sourceCfdaPk": "855d994488e32d398b8dfc863ac1823e",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Atomic Energy Commission",
               "l1OrgKey": 100500273
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500273"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500278,
               "agencyName": "President's Committee on Equal Opportunity In Housing",
               "cfdaCode": "",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500278",
               "fullParentPathName": "Presidents_Committee_on_Equal_Opportunity_In_Housing",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "President's Committee on Equal Opportunity In Housing",
               "shortName": "",
               "sourceCfdaPk": "92e83b3147845659e42c5bb8ac2b3ea4",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Presidents Committee on Equal Opportunity In Housing",
               "l1OrgKey": 100500278
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500278"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500279,
               "agencyName": "U.S.-mexico Commission for Border Development and Friendship",
               "cfdaCode": "",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500279",
               "fullParentPathName": "USmexico_Commission_for_Border_Development_and_Friendship",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "U.S.-mexico Commission for Border Development and Friendship",
               "shortName": "",
               "sourceCfdaPk": "9485f1eb96cf9175451cbec859a05e33",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "USmexico Commission for Border Development and Friendship",
               "l1OrgKey": 100500279
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500279"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500284,
               "agencyName": "New England Regional Commission",
               "cfdaCode": "48",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500284",
               "fullParentPathName": "New_England_Regional_Commission",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "New England Regional Commission",
               "shortName": "",
               "sourceCfdaPk": "a1fb5ff98e879118bd30d3f7811e92ac",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "New England Regional Commission",
               "l1OrgKey": 100500284
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500284"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500286,
               "agencyName": "Social Security Administration",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500286",
               "fullParentPathName": "Social_Security_Administration",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Social Security Administration",
               "shortName": "",
               "sourceCfdaPk": "a51b365d27c7eabc83aa9670e3a2e306",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Social Security Administration",
               "l1OrgKey": 100500286
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500286"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500287,
               "agencyName": "Office of Human Development",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500287",
               "fullParentPathName": "Office_of_Human_Development",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Office of Human Development",
               "shortName": "",
               "sourceCfdaPk": "a65573dc0e09f1d17e7915628a08f56e",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Office of Human Development",
               "l1OrgKey": 100500287
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500287"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500289,
               "agencyName": "Health Care Financing Administration",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500289",
               "fullParentPathName": "Health_Care_Financing_Administration",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Health Care Financing Administration",
               "shortName": "",
               "sourceCfdaPk": "a998db9bdbf94cac71588a4d30fc98f9",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Health Care Financing Administration",
               "l1OrgKey": 100500289
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500289"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500295,
               "agencyName": "President's Council on Physical Fitness and Sports",
               "cfdaCode": "55",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500295",
               "fullParentPathName": "Presidents_Council_on_Physical_Fitness_and_Sports",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "President's Council on Physical Fitness and Sports",
               "shortName": "",
               "sourceCfdaPk": "b0265088f5ac70a9b8636ff2e7bb1004",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Presidents Council on Physical Fitness and Sports",
               "l1OrgKey": 100500295
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500295"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500296,
               "agencyName": "Tennessee Valley Authority",
               "cfdaCode": "62",
               "createdBy": "",
               "createdDate": 1246980679000,
               "fullParentPath": "100500296",
               "fullParentPathName": "Tennessee_Valley_Authority",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980679000,
               "name": "Tennessee Valley Authority",
               "shortName": "",
               "sourceCfdaPk": "b2f81911f06debd4cd018774c8692ad2",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Tennessee Valley Authority",
               "l1OrgKey": 100500296
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500296"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500297,
               "agencyName": "Environmental Health Service",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500297",
               "fullParentPathName": "Environmental_Health_Service",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Environmental Health Service",
               "shortName": "",
               "sourceCfdaPk": "b33334fb55c6bcf1a65ae1fa3051155a",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Environmental Health Service",
               "l1OrgKey": 100500297
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500297"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500302,
               "agencyName": "Foreign Claims Settlement Commission of the United States",
               "cfdaCode": "37",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500302",
               "fullParentPathName": "Foreign_Claims_Settlement_Commission_of_the_United_States",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "Foreign Claims Settlement Commission of the United States",
               "shortName": "",
               "sourceCfdaPk": "bd7c854c5711c7079d15c021cde23a3c",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Foreign Claims Settlement Commission of the United States",
               "l1OrgKey": 100500302
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500302"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500318,
               "agencyName": "National Institutes of Health_ii",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500318",
               "fullParentPathName": "National_Institutes_of_Health_ii",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "National Institutes of Health_ii",
               "shortName": "",
               "sourceCfdaPk": "db70d5b29f5dc61c1148081752b4d312",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "National Institutes of Health ii",
               "l1OrgKey": 100500318
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500318"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500319,
               "agencyName": "Social and Rehabilitation Service",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500319",
               "fullParentPathName": "Social_and_Rehabilitation_Service",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Social and Rehabilitation Service",
               "shortName": "",
               "sourceCfdaPk": "dc62f950aebc4bb8a58f8375c4eb92e7",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Social and Rehabilitation Service",
               "l1OrgKey": 100500319
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500319"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500340,
               "agencyName": "Federal Emergency Management Administration",
               "cfdaCode": "83",
               "createdBy": "",
               "createdDate": 1246980680000,
               "fullParentPath": "100500340",
               "fullParentPathName": "Federal_Emergency_Management_Administration",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1409053295000,
               "name": "Federal Emergency Management Administration",
               "shortName": "",
               "sourceCfdaPk": "f84bd3989c0ea8307755220fe19890a7",
               "sourceParentCfdaPk": "",
               "summary": "FEMA is the focal point within the Federal Government for emergency planning, preparedness, mitigation, response, and recovery. The Agency works closely with State and local governments by funding emergency programs and providing technical guidance and training.  These coordinated activities at the Federal, State, and local levels ensure a broad-based emergency program to protect public safety and property. FEMA was established in the executive branch as an independent agency pursuant to Reorganization Plan No. 3 of 1978 (5 U.S.C. app.) and Executive Orders 12127 of March 31, 1979 (Federal Emergency Management Agency), and 12148 of July 20, 1979 (Federal Emergency Management).",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Federal Emergency Management Administration",
               "l1OrgKey": 100500340
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500340"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500325,
               "agencyName": "National Institutes of Health",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500325",
               "fullParentPathName": "National_Institutes_of_Health",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "National Institutes of Health",
               "shortName": "",
               "sourceCfdaPk": "e2cfb2269e634a0abcf55058e933be18",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "National Institutes of Health",
               "l1OrgKey": 100500325
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500325"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500328,
               "agencyName": "Interstate Commerce Commission",
               "cfdaCode": "41",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500328",
               "fullParentPathName": "Interstate_Commerce_Commission",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "Interstate Commerce Commission",
               "shortName": "",
               "sourceCfdaPk": "e57e8c41172d0ec4542a3a47c1f27917",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Interstate Commerce Commission",
               "l1OrgKey": 100500328
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500328"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500329,
               "agencyName": "Smithsonian Institution",
               "cfdaCode": "60",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500329",
               "fullParentPathName": "Smithsonian_Institution",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "Smithsonian Institution",
               "shortName": "",
               "sourceCfdaPk": "e620563db7a18ec56f5df940dbfedec0",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Smithsonian Institution",
               "l1OrgKey": 100500329
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500329"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500330,
               "agencyName": "National Council on Indian Opportunity",
               "cfdaCode": "67",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500330",
               "fullParentPathName": "National_Council_on_Indian_Opportunity",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "National Council on Indian Opportunity",
               "shortName": "",
               "sourceCfdaPk": "e6ebaa601aeb0a806ef99bc12dff1aa1",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "National Council on Indian Opportunity",
               "l1OrgKey": 100500330
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500330"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500333,
               "agencyName": "Health Services and Mental Health Administration",
               "cfdaCode": "13",
               "createdBy": "",
               "createdDate": 1246980681000,
               "fullParentPath": "100500333",
               "fullParentPathName": "Health_Services_and_Mental_Health_Administration",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980681000,
               "name": "Health Services and Mental Health Administration",
               "shortName": "",
               "sourceCfdaPk": "ed1b3b175cbfd6fda41d2fb952212cb1",
               "sourceParentCfdaPk": "f539290a4a344c03267345eaed3b7d46",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Health Services and Mental Health Administration",
               "l1OrgKey": 100500333
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500333"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500336,
               "agencyName": "President's Council on Youth Opportunity",
               "cfdaCode": "56",
               "createdBy": "",
               "createdDate": 1246980682000,
               "fullParentPath": "100500336",
               "fullParentPathName": "Presidents_Council_on_Youth_Opportunity",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980682000,
               "name": "President's Council on Youth Opportunity",
               "shortName": "",
               "sourceCfdaPk": "f2d36c9115a7b063436228bd7cf16bc9",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Presidents Council on Youth Opportunity",
               "l1OrgKey": 100500336
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500336"
               }
            }
         },
         {
            "org": {
               "orgKey": 100114575,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 1069286400000,
               "description": "FEDERAL MINE SAFETY AND HEALTH REVIEW COMMISSION",
               "fpdsOrgId": "9504",
               "cgac": "368",
               "fullParentPath": "100114575",
               "fullParentPathName": "FEDERAL_MINE_SAFETY_AND_HEALTH_REVIEW_COMMISSION",
               "isSourceFpds": true,
               "lastModifiedBy": "DODMIGRATOR",
               "lastModifiedDate": 1143676800000,
               "name": "FEDERAL MINE SAFETY AND HEALTH REVIEW COMMISSION",
               "orgCode": "ORG-1002",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9504",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "FEDERAL MINE SAFETY AND HEALTH REVIEW COMMISSION",
               "l1OrgKey": 100114575
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100114575"
               }
            }
         },
         {
            "org": {
               "orgKey": 100085357,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "DSTICKLER@OSC.GOV",
               "createdDate": 1173225600000,
               "description": "OFFICE OF SPECIAL COUNSEL",
               "fpdsOrgId": "6201",
               "cgac": "062",
               "fullParentPath": "100085357",
               "fullParentPathName": "OFFICE_OF_SPECIAL_COUNSEL",
               "isSourceFpds": true,
               "lastModifiedBy": "DONNAFLETCHER@OSC.GOV",
               "lastModifiedDate": 1236902400000,
               "name": "OFFICE OF SPECIAL COUNSEL",
               "orgCode": "ORG-1010",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "6201",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "OFFICE OF SPECIAL COUNSEL",
               "l1OrgKey": 100085357
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100085357"
               }
            }
         },
         {
            "org": {
               "orgKey": 100001979,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "NATIONAL CAPITAL PLANNING COMMISSION",
               "fpdsOrgId": "9502",
               "cgac": "394",
               "fullParentPath": "100001979",
               "fullParentPathName": "NATIONAL_CAPITAL_PLANNING_COMMISSION",
               "isSourceFpds": true,
               "lastModifiedBy": "CHARLES.RIEDER@NCPC.GOV",
               "lastModifiedDate": 1165363200000,
               "name": "NATIONAL CAPITAL PLANNING COMMISSION",
               "orgCode": "ORG-1051",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9502",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "NATIONAL CAPITAL PLANNING COMMISSION",
               "l1OrgKey": 100001979
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100001979"
               }
            }
         },
         {
            "org": {
               "orgKey": 100002353,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "NATIONAL TRANSPORTATION SAFETY BOARD",
               "fpdsOrgId": "9508",
               "cgac": "424",
               "fullParentPath": "100002353",
               "fullParentPathName": "NATIONAL_TRANSPORTATION_SAFETY_BOARD",
               "isSourceFpds": true,
               "lastModifiedBy": "KOWANNA.PARRAN@NTSB.GOV",
               "lastModifiedDate": 1270425600000,
               "name": "NATIONAL TRANSPORTATION SAFETY BOARD",
               "orgCode": "ORG-1109",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9508",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "NATIONAL TRANSPORTATION SAFETY BOARD",
               "l1OrgKey": 100002353
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100002353"
               }
            }
         },
         {
            "org": {
               "orgKey": 100002723,
               "a11TacCode": 95,
               "agencyName": "U.S. Commission on Civil Rights",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaCode": "",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "COMMISSION ON CIVIL RIGHTS",
               "fpdsCode": "9517",
               "fpdsOrgId": "9517",
               "cgac": "326",
               "fullParentPath": "100002723",
               "fullParentPathName": "COMMISSION_ON_CIVIL_RIGHTS",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "MIGRATOR",
               "lastModifiedDate": 838684800000,
               "name": "COMMISSION ON CIVIL RIGHTS",
               "ombAgencyCode": "326",
               "orgCode": "ORG-1117",
               "shortName": "",
               "sourceCfdaPk": "3fbc2a5d9de277ecfc2b69ebd167214c",
               "sourceParentCfdaPk": "80543289c19357b88928efaa0085a34f",
               "tas2Code": "95",
               "tas3Code": "326",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9517",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "COMMISSION ON CIVIL RIGHTS",
               "l1OrgKey": 100002723
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100002723"
               }
            }
         },
         {
            "org": {
               "orgKey": 100002836,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "NATIONAL MEDIATION BOARD",
               "fpdsOrgId": "9524",
               "cgac": "421",
               "fullParentPath": "100002836",
               "fullParentPathName": "NATIONAL_MEDIATION_BOARD",
               "isSourceFpds": true,
               "lastModifiedBy": "MIGRATOR",
               "lastModifiedDate": 838684800000,
               "name": "NATIONAL MEDIATION BOARD",
               "orgCode": "ORG-1122",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9524",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "NATIONAL MEDIATION BOARD",
               "l1OrgKey": 100002836
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100002836"
               }
            }
         },
         {
            "org": {
               "orgKey": 100110398,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "DNEARY",
               "createdDate": 1250812800000,
               "description": "RECOVERY ACCOUNTABILITY AND TRANSPARENCY BOARD",
               "fpdsOrgId": "9561",
               "cgac": "539",
               "fullParentPath": "100110398",
               "fullParentPathName": "RECOVERY_ACCOUNTABILITY_AND_TRANSPARENCY_BOARD",
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1253750400000,
               "name": "RECOVERY ACCOUNTABILITY AND TRANSPARENCY BOARD",
               "orgCode": "ORG-4363",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9561",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "RECOVERY ACCOUNTABILITY AND TRANSPARENCY BOARD",
               "l1OrgKey": 100110398
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100110398"
               }
            }
         },
         {
            "org": {
               "orgKey": 100015073,
               "a11TacCode": 65,
               "agencyName": "Federal Maritime Commission",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaCode": "",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "FEDERAL MARITIME COMMISSION",
               "fpdsCode": "6500",
               "fpdsOrgId": "6500",
               "cgac": "065",
               "fullParentPath": "100015073",
               "fullParentPathName": "FEDERAL_MARITIME_COMMISSION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "MIGRATOR",
               "lastModifiedDate": 1034035200000,
               "name": "FEDERAL MARITIME COMMISSION",
               "ombAgencyCode": "366",
               "orgCode": "ORG-1013",
               "shortName": "FMC",
               "sourceCfdaPk": "36c76111505f710f66f4aced4388eb13",
               "sourceParentCfdaPk": "",
               "tas3Code": "65",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "6500",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "FEDERAL MARITIME COMMISSION",
               "l1OrgKey": 100015073
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100015073"
               }
            }
         },
         {
            "org": {
               "orgKey": 100040053,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "DODMIGRATOR",
               "createdDate": 1064880000000,
               "description": "FEDERAL LABOR RELATIONS AUTHORITY",
               "fpdsOrgId": "5400",
               "cgac": "054",
               "fullParentPath": "100040053",
               "fullParentPathName": "FEDERAL_LABOR_RELATIONS_AUTHORITY",
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1152144000000,
               "name": "FEDERAL LABOR RELATIONS AUTHORITY",
               "orgCode": "ORG-1035",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "5400",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "FEDERAL LABOR RELATIONS AUTHORITY",
               "l1OrgKey": 100040053
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100040053"
               }
            }
         },
         {
            "org": {
               "orgKey": 100070566,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "ARMED FORCES RETIREMENT HOME",
               "fpdsOrgId": "84AF",
               "cgac": "084",
               "fullParentPath": "100070566",
               "fullParentPathName": "ARMED_FORCES_RETIREMENT_HOME",
               "isSourceFpds": true,
               "lastModifiedBy": "DODMIGRATOR",
               "lastModifiedDate": 1143676800000,
               "name": "ARMED FORCES RETIREMENT HOME",
               "orgCode": "ORG-1189",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "84AF",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "ARMED FORCES RETIREMENT HOME",
               "l1OrgKey": 100070566
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100070566"
               }
            }
         },
         {
            "org": {
               "orgKey": 100076164,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaCode": "",
               "createdBy": "LJOHNSON@CNS.GOV",
               "createdDate": 1066089600000,
               "description": "CORPORATION FOR NATIONAL AND COMMUNITY SERVICE",
               "fpdsCode": "9577",
               "fpdsOrgId": "9577",
               "cgac": "485",
               "fullParentPath": "100076164",
               "fullParentPathName": "CORPORATION_FOR_NATIONAL_AND_COMMUNITY_SERVICE",
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "MIGRATOR",
               "lastModifiedDate": 1064880000000,
               "name": "CORPORATION FOR NATIONAL AND COMMUNITY SERVICE",
               "orgCode": "ORG-1135",
               "sourceCfdaPk": "",
               "sourceParentCfdaPk": "",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9577",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "CORPORATION FOR NATIONAL AND COMMUNITY SERVICE",
               "l1OrgKey": 100076164
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100076164"
               }
            }
         },
         {
            "org": {
               "orgKey": 100076309,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "VERONICABULLOCK@MSPB.GOV",
               "createdDate": 1077235200000,
               "description": "MERIT SYSTEMS PROTECTION BOARD",
               "fpdsOrgId": "4100",
               "cgac": "389",
               "fullParentPath": "100076309",
               "fullParentPathName": "MERIT_SYSTEMS_PROTECTION_BOARD",
               "isSourceFpds": true,
               "lastModifiedBy": "VERONICABULLOCK@MSPB.GOV",
               "lastModifiedDate": 1077235200000,
               "name": "MERIT SYSTEMS PROTECTION BOARD",
               "orgCode": "ORG-1174",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "4100",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "MERIT SYSTEMS PROTECTION BOARD",
               "l1OrgKey": 100076309
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100076309"
               }
            }
         },
         {
            "org": {
               "orgKey": 100076344,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "TDUBOSE@UHSMM.ORG",
               "createdDate": 1084838400000,
               "description": "UNITED STATES HOLOCAUST MEMORIAL MUSEUM",
               "fpdsOrgId": "9531",
               "cgac": "456",
               "fullParentPath": "100076344",
               "fullParentPathName": "UNITED_STATES_HOLOCAUST_MEMORIAL_MUSEUM",
               "isSourceFpds": true,
               "lastModifiedBy": "MIGRATOR",
               "lastModifiedDate": 1064880000000,
               "name": "UNITED STATES HOLOCAUST MEMORIAL MUSEUM",
               "orgCode": "ORG-1125",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9531",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "UNITED STATES HOLOCAUST MEMORIAL MUSEUM",
               "l1OrgKey": 100076344
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100076344"
               }
            }
         },
         {
            "org": {
               "orgKey": 100076674,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "JYANDIK@JWOD.GOV",
               "createdDate": 1104105600000,
               "description": "COMMITTEE FOR PURCHASE FROM PEOPLE WHO ARE BLIND OR SEVERELY DISABLED",
               "fpdsOrgId": "9518",
               "cgac": "338",
               "fullParentPath": "100076674",
               "fullParentPathName": "COMMITTEE_FOR_PURCHASE_FROM_PEOPLE_WHO_ARE_BLIND_OR_SEVERELY_DISABLED",
               "isSourceFpds": true,
               "lastModifiedBy": "JYANDIK@JWOD.GOV",
               "lastModifiedDate": 1198022400000,
               "name": "COMMITTEE FOR PURCHASE FROM PEOPLE WHO ARE BLIND OR SEVERELY DISABLED",
               "orgCode": "ORG-1118",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9518",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "COMMITTEE FOR PURCHASE FROM PEOPLE WHO ARE BLIND OR SEVERELY DISABLED",
               "l1OrgKey": 100076674
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100076674"
               }
            }
         },
         {
            "org": {
               "orgKey": 100077050,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MARY.CROUSER@BPD.TREAS.GOV",
               "createdDate": 1142208000000,
               "description": "FEDERAL HOUSING FINANCE BOARD",
               "fpdsOrgId": "9540",
               "cgac": "364",
               "fullParentPath": "100077050",
               "fullParentPathName": "FEDERAL_HOUSING_FINANCE_BOARD",
               "isSourceFpds": true,
               "lastModifiedBy": "MARY.CROUSER@BPD.TREAS.GOV",
               "lastModifiedDate": 1142294400000,
               "name": "FEDERAL HOUSING FINANCE BOARD",
               "orgCode": "ORG-1128",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9540",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "FEDERAL HOUSING FINANCE BOARD",
               "l1OrgKey": 100077050
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100077050"
               }
            }
         },
         {
            "org": {
               "orgKey": 100110065,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "KATRINA.JONES@FHFA.GOV",
               "createdDate": 1246060800000,
               "description": "FEDERAL HOUSING FINANCE AGENCY",
               "fpdsOrgId": "9542",
               "cgac": "537",
               "fullParentPath": "100110065",
               "fullParentPathName": "FEDERAL_HOUSING_FINANCE_AGENCY",
               "isSourceFpds": true,
               "lastModifiedBy": "BERNARD.PIPER@FHFA.GOV",
               "lastModifiedDate": 1458259200000,
               "name": "FEDERAL HOUSING FINANCE AGENCY",
               "orgCode": "ORG-4326",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9542",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "FEDERAL HOUSING FINANCE AGENCY",
               "l1OrgKey": 100110065
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100110065"
               }
            }
         },
         {
            "org": {
               "orgKey": 100110281,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "DODMIGRATOR",
               "createdDate": 1064880000000,
               "description": "FEDERAL DEPOSIT INSURANCE CORPORATION",
               "fpdsOrgId": "5100",
               "cgac": "051",
               "fullParentPath": "100110281",
               "fullParentPathName": "FEDERAL_DEPOSIT_INSURANCE_CORPORATION",
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1152144000000,
               "name": "FEDERAL DEPOSIT INSURANCE CORPORATION",
               "orgCode": "ORG-1033",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "5100",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "FEDERAL DEPOSIT INSURANCE CORPORATION",
               "l1OrgKey": 100110281
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100110281"
               }
            }
         },
         {
            "org": {
               "orgKey": 100112407,
               "a11TacCode": 95,
               "agencyName": "U.S. Election Assistance Commission",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaCode": "",
               "createdBy": "DGANN@EAC.GOV",
               "createdDate": 1256515200000,
               "description": "ELECTION ASSISTANCE COMMISSION",
               "fpdsCode": "9523",
               "fpdsOrgId": "9523",
               "cgac": "525",
               "fullParentPath": "100112407",
               "fullParentPathName": "ELECTION_ASSISTANCE_COMMISSION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "DGANN@EAC.GOV",
               "lastModifiedDate": 1276041600000,
               "name": "ELECTION ASSISTANCE COMMISSION",
               "ombAgencyCode": "525",
               "orgCode": "ORG-1214",
               "shortName": "",
               "sourceCfdaPk": "564ef2e36d1a53696c3a97de3ba09309",
               "sourceParentCfdaPk": "c815257f3a2ae633546c266f02849825",
               "tas2Code": "95",
               "tas3Code": "525",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9523",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "ELECTION ASSISTANCE COMMISSION",
               "l1OrgKey": 100112407
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100112407"
               }
            }
         },
         {
            "org": {
               "orgKey": 100112509,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "AMERICAN BATTLE MONUMENTS COMMISSION",
               "fpdsOrgId": "7400",
               "cgac": "074",
               "fullParentPath": "100112509",
               "fullParentPathName": "AMERICAN_BATTLE_MONUMENTS_COMMISSION",
               "isSourceFpds": true,
               "lastModifiedBy": "MIGRATOR",
               "lastModifiedDate": 838684800000,
               "name": "AMERICAN BATTLE MONUMENTS COMMISSION",
               "orgCode": "ORG-1066",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "7400",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "AMERICAN BATTLE MONUMENTS COMMISSION",
               "l1OrgKey": 100112509
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100112509"
               }
            }
         },
         {
            "org": {
               "orgKey": 100133651,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "CHIDAM",
               "createdDate": 1337558400000,
               "description": "INDIAN LAW AND ORDER COMMISSION",
               "fpdsOrgId": "4811",
               "cgac": "584",
               "fullParentPath": "100133651",
               "fullParentPathName": "INDIAN_LAW_AND_ORDER_COMMISSION",
               "isSourceFpds": true,
               "lastModifiedBy": "CHIDAM",
               "lastModifiedDate": 1337558400000,
               "name": "INDIAN LAW AND ORDER COMMISSION",
               "orgCode": "ORG-4757",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "4811",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "INDIAN LAW AND ORDER COMMISSION",
               "l1OrgKey": 100133651
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100133651"
               }
            }
         },
         {
            "org": {
               "orgKey": 100212167,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 1069286400000,
               "description": "TENNESSEE VALLEY AUTHORITY",
               "fpdsOrgId": "6400",
               "cgac": "455",
               "fullParentPath": "100212167",
               "fullParentPathName": "TENNESSEE_VALLEY_AUTHORITY",
               "isSourceFpds": true,
               "lastModifiedBy": "DODMIGRATOR",
               "lastModifiedDate": 1143676800000,
               "name": "TENNESSEE VALLEY AUTHORITY",
               "orgCode": "ORG-1012",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "6400",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "TENNESSEE VALLEY AUTHORITY",
               "l1OrgKey": 100212167
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100212167"
               }
            }
         },
         {
            "org": {
               "orgKey": 100114157,
               "agencyName": "Architectural and Transportation Barriers Compliance Board",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "88",
               "cfdaOmb": 310,
               "createdBy": "",
               "createdDate": 1269820800000,
               "description": "ARCHITECTURAL AND TRANSPORTATION BARRIERS COMPLIANCE BOARD",
               "fpdsCode": "9532",
               "fpdsOrgId": "9532",
               "cgac": "310",
               "fullParentPath": "100114157",
               "fullParentPathName": "ARCHITECTURAL_AND_TRANSPORTATION_BARRIERS_COMPLIANCE_BOARD",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1272326400000,
               "name": "ARCHITECTURAL AND TRANSPORTATION BARRIERS COMPLIANCE BOARD",
               "orgCode": "ORG-1126",
               "shortName": "",
               "sourceCfdaPk": "85c6f28bc7b6dc0989f1630b185960a2",
               "sourceParentCfdaPk": "",
               "summary": "Ensures compliance to Federal laws requiring accessibility for physically handicapped persons in certain federally funded buildings and facilities throughout the Nation.  This includes setting guidelines and requirements for accessibility standards prescribed by Federal agencies, providing technical assistance to organizations agencies and individuals requesting help in solving accessible design and construction problems, and conducting research to determine appropriate specifications for accessibility.",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9532",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "ARCHITECTURAL AND TRANSPORTATION BARRIERS COMPLIANCE BOARD",
               "l1OrgKey": 100114157
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100114157"
               }
            }
         },
         {
            "org": {
               "orgKey": 100114160,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "TRACY3",
               "createdDate": 1269820800000,
               "description": "CHEMICAL SAFETY AND HAZARD INVESTIGATION BOARD",
               "fpdsOrgId": "9565",
               "cgac": "510",
               "fullParentPath": "100114160",
               "fullParentPathName": "CHEMICAL_SAFETY_AND_HAZARD_INVESTIGATION_BOARD",
               "isSourceFpds": true,
               "lastModifiedBy": "ALLEN.SMITH@CSB.GOV",
               "lastModifiedDate": 1458259200000,
               "name": "CHEMICAL SAFETY AND HAZARD INVESTIGATION BOARD",
               "orgCode": "ORG-1191",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9565",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "CHEMICAL SAFETY AND HAZARD INVESTIGATION BOARD",
               "l1OrgKey": 100114160
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100114160"
               }
            }
         },
         {
            "org": {
               "orgKey": 100114164,
               "a11TacCode": 95,
               "agencyName": "Denali Commission",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "90",
               "cfdaOmb": 513,
               "createdBy": "",
               "createdDate": 1269820800000,
               "description": "DENALI COMMISSION",
               "fpdsCode": "9572",
               "fpdsOrgId": "9572",
               "cgac": "513",
               "fullParentPath": "100114164",
               "fullParentPathName": "DENALI_COMMISSION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1272326400000,
               "name": "DENALI COMMISSION",
               "ombAgencyCode": "513",
               "orgCode": "ORG-1223",
               "shortName": "",
               "sourceCfdaPk": "8e7d7acc95cf88f233ea89413af8880a",
               "sourceParentCfdaPk": "",
               "summary": "Created by Congress in 1998, the Denali Commission is the Federal government and the State of Alaska working together to assist the most remote of American citizens to help themselves move closer to economic self-sufficiency, while preserving ancient cultural values and new opportunities to people living in American's last frontier.  With the creation of the Denali Commission, Congress acknowledged the need for increased inter-agency cooperation and focus on these remote communities.  This Federal-State partnership is intended to promote rural development, provide power generation and transmission facilities, modern communication systems, water and sewer systems and other infrastructure needs. ",
               "tas2Code": "95",
               "tas3Code": "513",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9572",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "DENALI COMMISSION",
               "l1OrgKey": 100114164
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100114164"
               }
            }
         },
         {
            "org": {
               "orgKey": 100115009,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "CHIDAM",
               "createdDate": 1274140800000,
               "description": "THE JUDICIAL BRANCH",
               "fpdsOrgId": "1000",
               "cgac": "010",
               "fullParentPath": "100115009",
               "fullParentPathName": "THE_JUDICIAL_BRANCH",
               "isSourceFpds": true,
               "lastModifiedBy": "CHIDAM",
               "lastModifiedDate": 1274140800000,
               "name": "THE JUDICIAL BRANCH",
               "orgCode": "ORG-1203",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1000",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "THE JUDICIAL BRANCH",
               "l1OrgKey": 100115009
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100115009"
               }
            }
         },
         {
            "org": {
               "orgKey": 100118476,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "RALSTONCOX@ACHP.GOV",
               "createdDate": 1280793600000,
               "description": "ADVISORY COUNCIL ON HISTORIC PRESERVATION",
               "fpdsOrgId": "9530",
               "cgac": "306",
               "fullParentPath": "100118476",
               "fullParentPathName": "ADVISORY_COUNCIL_ON_HISTORIC_PRESERVATION",
               "isSourceFpds": true,
               "lastModifiedBy": "RALSTONCOX@ACHP.GOV",
               "lastModifiedDate": 1280793600000,
               "name": "ADVISORY COUNCIL ON HISTORIC PRESERVATION",
               "orgCode": "ORG-1124",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9530",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "ADVISORY COUNCIL ON HISTORIC PRESERVATION",
               "l1OrgKey": 100118476
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100118476"
               }
            }
         },
         {
            "org": {
               "orgKey": 100122039,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "GAIL.PERRINE@BPD.TREAS.GOV",
               "createdDate": 1289520000000,
               "description": "OFFICE OF GOVERNMENT ETHICS",
               "fpdsOrgId": "9549",
               "cgac": "434",
               "fullParentPath": "100122039",
               "fullParentPathName": "OFFICE_OF_GOVERNMENT_ETHICS",
               "isSourceFpds": true,
               "lastModifiedBy": "GAIL.PERRINE@BPD.TREAS.GOV",
               "lastModifiedDate": 1289520000000,
               "name": "OFFICE OF GOVERNMENT ETHICS",
               "orgCode": "ORG-1131",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9549",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "OFFICE OF GOVERNMENT ETHICS",
               "l1OrgKey": 100122039
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100122039"
               }
            }
         },
         {
            "org": {
               "orgKey": 100123646,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "KATE2",
               "createdDate": 1296604800000,
               "description": "ADMINISTRATIVE OFFICE OF THE U.S. COURTS",
               "fpdsOrgId": "1027",
               "cgac": "010",
               "fullParentPath": "100123646",
               "fullParentPathName": "ADMINISTRATIVE_OFFICE_OF_THE_US_COURTS",
               "isSourceFpds": true,
               "lastModifiedBy": "ALICIA_STEELE@AO.USCOURTS.GOV",
               "lastModifiedDate": 1301529600000,
               "name": "ADMINISTRATIVE OFFICE OF THE U.S. COURTS",
               "orgCode": "ORG-1107",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1027",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "ADMINISTRATIVE OFFICE OF THE US COURTS",
               "l1OrgKey": 100123646
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100123646"
               }
            }
         },
         {
            "org": {
               "orgKey": 100133298,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "BRETT.WILSON@CIGIE.GOV",
               "createdDate": 1335398400000,
               "description": "THE COUNCIL OF THE INSPECTORS GENERAL ON INTEGRITY AND EFFICIENCY ",
               "fpdsOrgId": "9511",
               "cgac": "542",
               "fullParentPath": "100133298",
               "fullParentPathName": "THE_COUNCIL_OF_THE_INSPECTORS_GENERAL_ON_INTEGRITY_AND_EFFICIENCY_",
               "isSourceFpds": true,
               "lastModifiedBy": "BRETT.WILSON@CIGIE.GOV",
               "lastModifiedDate": 1335398400000,
               "name": "THE COUNCIL OF THE INSPECTORS GENERAL ON INTEGRITY AND EFFICIENCY ",
               "orgCode": "ORG-4653",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9511",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "THE COUNCIL OF THE INSPECTORS GENERAL ON INTEGRITY AND EFFICIENCY ",
               "l1OrgKey": 100133298
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100133298"
               }
            }
         },
         {
            "org": {
               "orgKey": 100128593,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "HOA.CREWS@CFPB.GOV",
               "createdDate": 1315872000000,
               "description": "CONSUMER FINANCIAL PROTECTION BUREAU",
               "fpdsOrgId": "955F",
               "cgac": "581",
               "fullParentPath": "100128593",
               "fullParentPathName": "CONSUMER_FINANCIAL_PROTECTION_BUREAU",
               "isSourceFpds": true,
               "lastModifiedBy": "HOA.CREWS@CFPB.GOV",
               "lastModifiedDate": 1406851200000,
               "name": "CONSUMER FINANCIAL PROTECTION BUREAU",
               "orgCode": "ORG-4773",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "955F",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "CONSUMER FINANCIAL PROTECTION BUREAU",
               "l1OrgKey": 100128593
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100128593"
               }
            }
         },
         {
            "org": {
               "orgKey": 100131864,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "NGUYENK@GAO.GOV",
               "createdDate": 1329782400000,
               "description": "GOVERNMENT ACCOUNTABILITY OFFICE",
               "fpdsOrgId": "0500",
               "cgac": "005",
               "fullParentPath": "100131864",
               "fullParentPathName": "GOVERNMENT_ACCOUNTABILITY_OFFICE",
               "isSourceFpds": true,
               "lastModifiedBy": "NGUYENK@GAO.GOV",
               "lastModifiedDate": 1454457600000,
               "name": "GOVERNMENT ACCOUNTABILITY OFFICE",
               "orgCode": "ORG-1084",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "0500",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "GOVERNMENT ACCOUNTABILITY OFFICE",
               "l1OrgKey": 100131864
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100131864"
               }
            }
         },
         {
            "org": {
               "orgKey": 100131940,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 1032220800000,
               "description": "UNITED STATES TRADE AND DEVELOPMENT AGENCY",
               "fpdsOrgId": "1153",
               "cgac": "011",
               "fullParentPath": "100131940",
               "fullParentPathName": "UNITED_STATES_TRADE_AND_DEVELOPMENT_AGENCY",
               "isSourceFpds": true,
               "lastModifiedBy": "MIGRATOR",
               "lastModifiedDate": 1032220800000,
               "name": "UNITED STATES TRADE AND DEVELOPMENT AGENCY",
               "orgCode": "ORG-1077",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1153",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "UNITED STATES TRADE AND DEVELOPMENT AGENCY",
               "l1OrgKey": 100131940
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100131940"
               }
            }
         },
         {
            "org": {
               "orgKey": 100135764,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "GSA_HELPDESK",
               "createdDate": 1349136000000,
               "description": "ARCHITECT OF THE CAPITOL",
               "fpdsOrgId": "0100",
               "cgac": "001",
               "fullParentPath": "100135764",
               "fullParentPathName": "ARCHITECT_OF_THE_CAPITOL",
               "isSourceFpds": true,
               "lastModifiedBy": "GSA_HELPDESK",
               "lastModifiedDate": 1349136000000,
               "name": "ARCHITECT OF THE CAPITOL",
               "orgCode": "ORG-1081",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "0100",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "ARCHITECT OF THE CAPITOL",
               "l1OrgKey": 100135764
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100135764"
               }
            }
         },
         {
            "org": {
               "orgKey": 100141313,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "PRODERER@CFA.GOV",
               "createdDate": 1378944000000,
               "description": "COMMISSION OF FINE ARTS",
               "fpdsOrgId": "9537",
               "cgac": "323",
               "fullParentPath": "100141313",
               "fullParentPathName": "COMMISSION_OF_FINE_ARTS",
               "isSourceFpds": true,
               "lastModifiedBy": "PRODERER@CFA.GOV",
               "lastModifiedDate": 1378944000000,
               "name": "COMMISSION OF FINE ARTS",
               "orgCode": "ORG-1127",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9537",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "COMMISSION OF FINE ARTS",
               "l1OrgKey": 100141313
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100141313"
               }
            }
         },
         {
            "org": {
               "orgKey": 100144866,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "GSA_HELPDESK",
               "createdDate": 1395705600000,
               "description": "OPEN WORLD LEADERSHIP CENTER",
               "fpdsOrgId": "0945",
               "cgac": "009",
               "fullParentPath": "100144866",
               "fullParentPathName": "OPEN_WORLD_LEADERSHIP_CENTER",
               "isSourceFpds": true,
               "lastModifiedBy": "GSA_HELPDESK",
               "lastModifiedDate": 1395705600000,
               "name": "OPEN WORLD LEADERSHIP CENTER",
               "orgCode": "ORG-4995",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "0945",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "OPEN WORLD LEADERSHIP CENTER",
               "l1OrgKey": 100144866
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100144866"
               }
            }
         },
         {
            "org": {
               "orgKey": 100147598,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "JOE.KELLY@PCLOB.GOV",
               "createdDate": 1409184000000,
               "description": "PRIVACY AND CIVIL LIBERTIES OVERSIGHT BOARD",
               "fpdsOrgId": "9526",
               "cgac": "535",
               "fullParentPath": "100147598",
               "fullParentPathName": "PRIVACY_AND_CIVIL_LIBERTIES_OVERSIGHT_BOARD",
               "isSourceFpds": true,
               "lastModifiedBy": "JOE.KELLY@PCLOB.GOV",
               "lastModifiedDate": 1409184000000,
               "name": "PRIVACY AND CIVIL LIBERTIES OVERSIGHT BOARD",
               "orgCode": "ORG-5035",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9526",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "PRIVACY AND CIVIL LIBERTIES OVERSIGHT BOARD",
               "l1OrgKey": 100147598
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100147598"
               }
            }
         },
         {
            "org": {
               "orgKey": 100152711,
               "a11TacCode": 95,
               "agencyName": "Gulf Coast Ecosystem Restoration Council",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaCode": "87",
               "createdBy": "",
               "createdDate": 1437004800000,
               "description": "GULF COAST ECOSYSTEM RESTORATION COUNCIL",
               "fpdsCode": "9533",
               "fpdsOrgId": "9533",
               "cgac": "471",
               "fullParentPath": "100152711",
               "fullParentPathName": "GULF_COAST_ECOSYSTEM_RESTORATION_COUNCIL",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1437004800000,
               "name": "GULF COAST ECOSYSTEM RESTORATION COUNCIL",
               "ombAgencyCode": "586",
               "orgCode": "ORG-4977",
               "shortName": "",
               "sourceCfdaPk": "445576a3806e9af06d9b1848081444e3",
               "sourceParentCfdaPk": "",
               "summary": "The Council was created by the Resources and Ecosystems Sustainability, Tourist Opportunities, and Revived Economies of the Gulf Coast States (RESTORE) Act of 2012, Sec. 1603(t)(2).  The Council is charged with helping to restore the ecosystem and economy of the Gulf Coast region by developing and overseeing implementation of a Comprehensive Plan and carrying out other responsibilities.  The Council is directed by statute to expend funds made available from the Trust Fund to undertake projects and programs, using the best available science, that would restore and protect the natural resources, ecosystems, fisheries, marine and wildlife habitats, beaches, coastal wetlands, and economy of the Gulf Coast.",
               "tas3Code": "471",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9533",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "GULF COAST ECOSYSTEM RESTORATION COUNCIL",
               "l1OrgKey": 100152711
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100152711"
               }
            }
         },
         {
            "org": {
               "orgKey": 100163085,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459468800000,
               "description": "OCCUPATIONAL SAFETY AND HEALTH REVIEW COMMISSION",
               "fpdsOrgId": "9514",
               "cgac": "432",
               "fullParentPath": "100163085",
               "fullParentPathName": "OCCUPATIONAL_SAFETY_AND_HEALTH_REVIEW_COMMISSION",
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1459468800000,
               "name": "OCCUPATIONAL SAFETY AND HEALTH REVIEW COMMISSION",
               "orgCode": "ORG-1114",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9514",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "OCCUPATIONAL SAFETY AND HEALTH REVIEW COMMISSION",
               "l1OrgKey": 100163085
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100163085"
               }
            }
         },
         {
            "org": {
               "orgKey": 100169645,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459468800000,
               "description": "PRETRIAL SERVICES AGENCY",
               "fpdsOrgId": "959P",
               "cgac": "511",
               "fullParentPath": "100169645",
               "fullParentPathName": "PRETRIAL_SERVICES_AGENCY",
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1462492800000,
               "name": "PRETRIAL SERVICES AGENCY",
               "orgCode": "ORG-5382",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "959P",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "PRETRIAL SERVICES AGENCY",
               "l1OrgKey": 100169645
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100169645"
               }
            }
         },
         {
            "org": {
               "orgKey": 100171765,
               "agencyName": "National Endowment for the Humanities",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "45",
               "cfdaOmb": 418,
               "createdBy": "",
               "createdDate": 1459468800000,
               "description": "NATIONAL ENDOWMENT FOR THE HUMANITIES",
               "fpdsCode": "5940",
               "fpdsOrgId": "5940",
               "cgac": "417",
               "fullParentPath": "100171765",
               "fullParentPathName": "NATIONAL_ENDOWMENT_FOR_THE_HUMANITIES",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1463443200000,
               "name": "NATIONAL ENDOWMENT FOR THE HUMANITIES",
               "ombAgencyCode": "418",
               "orgCode": "ORG-1007",
               "shortName": "",
               "sourceCfdaPk": "853d8f1c98df02a7dd4da2088ac42ad7",
               "sourceParentCfdaPk": "",
               "summary": "Promotes and supports the production and dissemination of knowledge in the humanities.  The term \"humanities\" includes, but is not limited to, the study of the following: language, both modern and classical; linguistics; literature; history; jurisprudence; philosophy; archaeology; comparative religion; ethics; the history, criticism, and theory of the arts; and those aspects of the social sciences that employ historical or philosophical approaches.  The Endowment makes grants to individuals, groups, or institutions (schools, colleges, universities, museums, public television stations, libraries, public agencies, and nonprofit private groups) to increase understanding and appreciation of the humanities. ",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "5940",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "NATIONAL ENDOWMENT FOR THE HUMANITIES",
               "l1OrgKey": 100171765
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100171765"
               }
            }
         },
         {
            "org": {
               "orgKey": 100171768,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459468800000,
               "description": "CONSUMER PRODUCT SAFETY COMMISSION",
               "fpdsOrgId": "6100",
               "cgac": "061",
               "fullParentPath": "100171768",
               "fullParentPathName": "CONSUMER_PRODUCT_SAFETY_COMMISSION",
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1459468800000,
               "name": "CONSUMER PRODUCT SAFETY COMMISSION",
               "orgCode": "ORG-1009",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "6100",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "CONSUMER PRODUCT SAFETY COMMISSION",
               "l1OrgKey": 100171768
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100171768"
               }
            }
         },
         {
            "org": {
               "orgKey": 100193704,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "INTERSTATE COMMERCE COMMISSION",
               "fpdsOrgId": "3000",
               "cgac": "030",
               "fullParentPath": "100193704",
               "fullParentPathName": "INTERSTATE_COMMERCE_COMMISSION",
               "isSourceFpds": true,
               "lastModifiedBy": "MIGRATOR",
               "lastModifiedDate": 838684800000,
               "name": "INTERSTATE COMMERCE COMMISSION",
               "orgCode": "ORG-1168",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "3000",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "INTERSTATE COMMERCE COMMISSION",
               "l1OrgKey": 100193704
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100193704"
               }
            }
         },
         {
            "org": {
               "orgKey": 100182441,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459468800000,
               "description": "DEFENSE NUCLEAR FACILITIES SAFETY BOARD",
               "fpdsOrgId": "9516",
               "cgac": "347",
               "fullParentPath": "100182441",
               "fullParentPathName": "DEFENSE_NUCLEAR_FACILITIES_SAFETY_BOARD",
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1459468800000,
               "name": "DEFENSE NUCLEAR FACILITIES SAFETY BOARD",
               "orgCode": "ORG-1116",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9516",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "DEFENSE NUCLEAR FACILITIES SAFETY BOARD",
               "l1OrgKey": 100182441
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100182441"
               }
            }
         },
         {
            "org": {
               "orgKey": 100188920,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1461283200000,
               "description": "COURT SERVICES AND OFFENDER SUPERVISION AGENCY",
               "fpdsOrgId": "9594",
               "cgac": "511",
               "fullParentPath": "100188920",
               "fullParentPathName": "COURT_SERVICES_AND_OFFENDER_SUPERVISION_AGENCY",
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1462492800000,
               "name": "COURT SERVICES AND OFFENDER SUPERVISION AGENCY",
               "orgCode": "ORG-1182",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9594",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "COURT SERVICES AND OFFENDER SUPERVISION AGENCY",
               "l1OrgKey": 100188920
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100188920"
               }
            }
         },
         {
            "org": {
               "orgKey": 100196262,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 858729600000,
               "description": "J. F. KENNEDY CENTER FOR THE PERFORMING ARTS",
               "fpdsOrgId": "3352",
               "cgac": "033",
               "fullParentPath": "100196262",
               "fullParentPathName": "J_F_KENNEDY_CENTER_FOR_THE_PERFORMING_ARTS",
               "isSourceFpds": true,
               "lastModifiedBy": "MIGRATOR",
               "lastModifiedDate": 858816000000,
               "name": "J. F. KENNEDY CENTER FOR THE PERFORMING ARTS",
               "orgCode": "ORG-1147",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "3352",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "J F KENNEDY CENTER FOR THE PERFORMING ARTS",
               "l1OrgKey": 100196262
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100196262"
               }
            }
         },
         {
            "org": {
               "orgKey": 100196748,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "SELECTIVE SERVICE SYSTEM",
               "fpdsOrgId": "9000",
               "cgac": "090",
               "fullParentPath": "100196748",
               "fullParentPathName": "SELECTIVE_SERVICE_SYSTEM",
               "isSourceFpds": true,
               "lastModifiedBy": "MIGRATOR",
               "lastModifiedDate": 838684800000,
               "name": "SELECTIVE SERVICE SYSTEM",
               "orgCode": "ORG-1053",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9000",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "SELECTIVE SERVICE SYSTEM",
               "l1OrgKey": 100196748
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100196748"
               }
            }
         },
         {
            "org": {
               "orgKey": 100241110,
               "agencyName": "National Endowment for the Arts",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "45",
               "cfdaOmb": 417,
               "createdBy": "",
               "createdDate": 838684800000,
               "description": "NATIONAL ENDOWMENT FOR THE ARTS",
               "fpdsCode": "5920",
               "fpdsOrgId": "5920",
               "cgac": "417",
               "fullParentPath": "100241110",
               "fullParentPathName": "NATIONAL_ENDOWMENT_FOR_THE_ARTS",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 838684800000,
               "name": "NATIONAL ENDOWMENT FOR THE ARTS",
               "ombAgencyCode": "417",
               "orgCode": "ORG-1006",
               "shortName": "",
               "sourceCfdaPk": "bc9b1137499ed6e02b06f36309a31999",
               "sourceParentCfdaPk": "",
               "summary": "The National Endowment for the Arts is a public agency dedicated to supporting excellence in the arts, both new and established bringing the arts to all Americans, and providing leadership in arts education. The National Endowment for the Arts is the largest annual funder of the arts in the United States.  An independent federal agency, the National Endowment for the Arts is the official arts organization of the United States government. The National Endowment for the Arts awards more than $100 million annually investing in every state which in turn generates more than $700 million in additional support.  The Arts Endowment has played a transformative and sustaining role in the development of regional theater, opera, dance, orchestras, museums, and other arts both contemporary and traditional that Americans now enjoy.",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "5920",
               "orgAddresses": [
                  {
                     "addressKey": 100272445,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "036016aa5b797617c6023036f5c2df78",
                     "createdDate": 1444317091000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320709000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "NATIONAL ENDOWMENT FOR THE ARTS",
               "l1OrgKey": 100241110
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100241110"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500156,
               "a11TacCode": 95,
               "agencyName": "Barry Goldwater Scholarship and Excellence In Education Foundation",
               "cfdaBur": 0,
               "cfdaCode": "85",
               "cfdaOmb": 313,
               "createdBy": "",
               "fpdsCode": "",
               "cgac": "313",
               "fullParentPath": "100500156",
               "fullParentPathName": "BARRY_GOLDWATER_SCHOLARSHIP_AND_EXCELLENCE_IN_EDUCATION_FOUNDATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "lastModifiedBy": "",
               "name": "BARRY GOLDWATER SCHOLARSHIP AND EXCELLENCE IN EDUCATION FOUNDATION",
               "ombAgencyCode": "313",
               "shortName": "",
               "sourceCfdaPk": "e9412bf7df9ccf1c75b124e52ff0d284",
               "sourceParentCfdaPk": "",
               "summary": "Established in 1983 to honor former Senator Barry Goldwater through the operation of an education scholarship program, financed by a permanent trust fund endowment, designed to encourage outstanding students to pursue careers in mathematics, the natural sciences, and engineering.",
               "tas2Code": "95",
               "tas3Code": "313",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "BARRY GOLDWATER SCHOLARSHIP AND EXCELLENCE IN EDUCATION FOUNDATION",
               "l1OrgKey": 100500156
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500156"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500160,
               "agencyName": "Harry S Truman Scholarship Foundation",
               "cfdaBur": 0,
               "cfdaCode": "85",
               "cfdaOmb": 372,
               "createdBy": "",
               "fpdsCode": "",
               "cgac": "372",
               "fullParentPath": "100500160",
               "fullParentPathName": "HARRY_S_TRUMAN_SCHOLARSHIP_FOUNDATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "lastModifiedBy": "",
               "name": "HARRY S TRUMAN SCHOLARSHIP FOUNDATION",
               "ombAgencyCode": "372",
               "shortName": "",
               "sourceCfdaPk": "c17d9ea659f16a8f2e2484a9b1a3d43e",
               "sourceParentCfdaPk": "",
               "summary": " Awards college scholarships of up to $5 thousand annually for 4 years to persons who demonstrate outstanding potential for and who are preparing to pursue a career in public service. ",
               "tas2Code": "95",
               "tas3Code": "372",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "HARRY S TRUMAN SCHOLARSHIP FOUNDATION",
               "l1OrgKey": 100500160
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500160"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500161,
               "agencyName": "James Madison Memorial Fellowship Foundation",
               "cfdaBur": 0,
               "cfdaCode": "85",
               "cfdaOmb": 381,
               "createdBy": "",
               "fpdsCode": "",
               "cgac": "381",
               "fullParentPath": "100500161",
               "fullParentPathName": "JAMES_MADISON_MEMORIAL_FELLOWSHIP_FOUNDATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "lastModifiedBy": "",
               "name": "JAMES MADISON MEMORIAL FELLOWSHIP FOUNDATION",
               "ombAgencyCode": "381",
               "shortName": "",
               "sourceCfdaPk": "5484e90300a776bf6c8da7c0419721e6",
               "sourceParentCfdaPk": "",
               "summary": "Fellowships are awarded that seek to strengthen secondary school teaching of the principles, framing, and development of the U.S. Constitution.  The program works to contribute to a deeper understanding of American government and to foster in both teachers and students the spirit of civic participation that inspired the Nation's founders.",
               "tas2Code": "95",
               "tas3Code": "381",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "",
               "orgAddresses": [
                  {
                     "addressKey": 100272411,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "036016aa5b797617c6023036f5c2df78",
                     "createdDate": 1444316580000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320315000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "JAMES MADISON MEMORIAL FELLOWSHIP FOUNDATION",
               "l1OrgKey": 100500161
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500161"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500162,
               "agencyName": "Japan U.S. Friendship Commission",
               "cfdaBur": 0,
               "cfdaCode": "90",
               "cfdaOmb": 382,
               "createdBy": "",
               "fpdsCode": "",
               "cgac": "382",
               "fullParentPath": "100500162",
               "fullParentPathName": "JAPAN_US_FRIENDSHIP_COMMISSION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "lastModifiedBy": "",
               "name": "JAPAN U.S. FRIENDSHIP COMMISSION",
               "ombAgencyCode": "382",
               "shortName": "",
               "sourceCfdaPk": "5673327adea2f9c719cb133fd1fb287d",
               "sourceParentCfdaPk": "",
               "summary": "The Japan-United States Friendship Act of 1975 established the Japan-United States Friendship Trust Fund and created the Japan-United States Friendship Commission to make grants for the promotion of scholarly, cultural, and artistic activities between Japan and the United States. The Commission is authorized to make expenditures from the fund in an amount not to exceed 5 percent annually of the fund's original principal to pay Commission expenses and make grants to support Japanese studies in American universities, policy oriented research, faculty and other professional exchanges, public affairs programs, and other cultural and educational activities primarily in the United States.",
               "tas2Code": "95",
               "tas3Code": "382",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "JAPAN US FRIENDSHIP COMMISSION",
               "l1OrgKey": 100500162
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500162"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500167,
               "a11TacCode": 95,
               "agencyName": "United States Institute of Peace",
               "cfdaBur": 0,
               "cfdaCode": "91",
               "cfdaOmb": 458,
               "createdBy": "",
               "fpdsCode": "",
               "cgac": "458",
               "fullParentPath": "100500167",
               "fullParentPathName": "UNITED_STATES_INSTITUTE_OF_PEACE",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "lastModifiedBy": "",
               "name": "UNITED STATES INSTITUTE OF PEACE",
               "ombAgencyCode": "458",
               "shortName": "",
               "sourceCfdaPk": "d2fcfd40349f76574f44aeacd6ceaadb",
               "sourceParentCfdaPk": "",
               "summary": "The United States Institute of Peace was established as an independent, Federal, nonprofit corporation by act of October 19, 1984 (22 U.S.C. 4603). It was established to strengthen the Nation's capacity to promote international peace and the peaceful resolution of conflicts among the peoples and nations of the world. The purpose of the Institute is to develop and disseminate knowledge about the peaceful resolution of international conflict.  To accomplish this the Institute has set the following goals:  To provide creative practical insights through research, education, and training on negotiation, mediation, and other skills to those actively engaged in resolving international conflicts; to expand the body of knowledge about the nature and processes of peace, war, and international conflict management; and to disseminate information to the public about these subjects.  Among the Institute's instruments are grants, fellowships, a library, and in-house projects. The grants program provides financial support to nonprofit organizations, including private colleges and universities; official public institutions, including public schools, colleges, universities, libraries, and Federal, State, and local agencies; and individuals, whether or not they are associated with nonprofit or official public institutions. The Jennings Randolph Program for International Peace offers senior fellowships annually to practitioners or scholars in the U.S. and around the world who join the Institute for about ten months to work on projects concerning the sources and nature of international conflict and ways of managing conflict and sustaining peace.  The program also awards Peace Scholar Dissertation Fellowships annually to outstanding doctoral students enrolled in an accredited university in the U.S. who are researching or writing a dissertation that promises to contribute knowledge relevant to the formulation of policy on international peace and conflict issues.  The Jeannette Rankin Library Program is developing four main components on international peacemaking:  a specialized research library; a network with and support for other libraries, both specialized and public; an oral history resource; and bibliographic as well as other data bases. Institute-directed projects under the Education and Public Information Program include an educational TV program and cassette programs on such topics as U.S.-Soviet summitry and a National Peace Essay Contest for high school students.  The in-house Research and Studies is completing a broad, systematic examination of peace and conflict management theories and features workshops and seminars.  Institute publications include biennial report to Congress and the President; a newsletter, The Untied States Institute of Peace Journal; and short issue papers, in brief.  For more information please visit the Institute's web sit at www.usip.org.",
               "tas2Code": "95",
               "tas3Code": "458",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "UNITED STATES INSTITUTE OF PEACE",
               "l1OrgKey": 100500167
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500167"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500168,
               "a11TacCode": 95,
               "agencyName": "Vietnam Education Foundation",
               "cfdaCode": "85",
               "cfdaOmb": 95,
               "createdBy": "",
               "fpdsCode": "",
               "cgac": "519",
               "fullParentPath": "100500168",
               "fullParentPathName": "VIETNAM_EDUCATION_FOUNDATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "lastModifiedBy": "",
               "name": "VIETNAM EDUCATION FOUNDATION",
               "ombAgencyCode": "519",
               "shortName": "",
               "sourceCfdaPk": "a0e9412466890ff61b92baabdfa4bbe2",
               "sourceParentCfdaPk": "",
               "summary": "The Vietnam Education Foundation (VEF) was established by the U.S. Congress under the Vietnam Education Foundation Act (2000) to create educational exchange activities for Vietnamese nationals to pursue graduate studies or professional development at U.S. universities and for Americans to teach at Vietnamese universities and, thus, build the bilateral relationship between the United States and Vietnam. VEF is governed by a thirteen-member Board of Directors: two U.S. Senators, two U.S. Representatives, three U.S. cabinet members, and six members from the U.S. citizenry appointed by the U.S. President. A Board-appointed American Executive Director oversees VEF operations, conducted through two highly coordinated offices: the U.S. Headquarters in the Washington, D.C., area and the Vietnam Field office in Hanoi. VEF receives an annual budget of U.S. $5 million from the U.S. Congress until 2018. \n\nThe VEF programs, as prescribed in the VEF legislation, focus on the sciences (natural, physical, and environmental), engineering, mathematics, medicine (including public health and health sciences), and technology (including information technology), known as the STEMM  fields. The following are the core VEF activities: (1) Fellowship Program that brings Vietnamese nationals to the United States for graduate degree programs, funded through cost-sharing agreements with U.S. universities; (2) Visiting Scholar Program that funds Vietnamese nationals with a Ph.D. to develop their professional skills through studies, research, and/or observational activities at leading U.S. institutions; and (3) U.S. Faculty Scholar Program that provides grants to American professors to teach courses in English at Vietnamese institutions for one or two semesters, on site in Vietnam or via interactive, real-time videoconferencing. VEF capacity-building efforts build the relationship between U.S. and Vietnamese institutions and government entities and strengthen the foundations in Vietnam for the return of VEF Fellows and Visiting Scholars to their home country. \n",
               "tas2Code": "95",
               "tas3Code": "519",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "VIETNAM EDUCATION FOUNDATION",
               "l1OrgKey": 100500168
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500168"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500692,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1464383990000,
               "description": "THE LEGISLATIVE BRANCH",
               "fpdsOrgId": "0000",
               "fullParentPath": "100500692",
               "fullParentPathName": "THE_LEGISLATIVE_BRANCH",
               "ingestedOn": 1473066057849,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1466765222000,
               "name": "THE LEGISLATIVE BRANCH",
               "orgCode": "ORG-1194",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "0000",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "THE LEGISLATIVE BRANCH",
               "l1OrgKey": 100500692
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500692"
               }
            }
         },
         {
            "org": {
               "orgKey": 100528873,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459544250000,
               "description": "JUSTICE, DEPARTMENT OF",
               "fpdsOrgId": "1500",
               "fullParentPath": "100528873",
               "fullParentPathName": "JUSTICE_DEPARTMENT_OF",
               "ingestedOn": 1486152065041,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1484339427000,
               "name": "JUSTICE, DEPARTMENT OF",
               "orgCode": "ORG-1181",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1500",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "JUSTICE DEPARTMENT OF",
               "l1OrgKey": 100528873
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100528873"
               }
            }
         },
         {
            "org": {
               "orgKey": 100525174,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-3",
               "createdBy": "FPDSADMIN",
               "createdDate": 1145045467000,
               "description": "DEPT OF DEFENSE",
               "fpdsOrgId": "9700",
               "fullParentPath": "100525174",
               "fullParentPathName": "DEPT_OF_DEFENSE",
               "ingestedOn": 1486152031313,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1486067419000,
               "name": "DEPT OF DEFENSE",
               "orgCode": "ORG-1144",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9700",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "DEPT OF DEFENSE",
               "l1OrgKey": 100525174
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100525174"
               }
            }
         },
         {
            "org": {
               "orgKey": 100528930,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459545110000,
               "description": "STATE, DEPARTMENT OF",
               "fpdsOrgId": "1900",
               "fullParentPath": "100528930",
               "fullParentPathName": "STATE_DEPARTMENT_OF",
               "ingestedOn": 1486152065864,
               "isSourceFpds": true,
               "lastModifiedBy": "PSHIPLEY",
               "lastModifiedDate": 1485858245000,
               "name": "STATE, DEPARTMENT OF",
               "orgCode": "ORG-1180",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1900",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "STATE DEPARTMENT OF",
               "l1OrgKey": 100528930
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100528930"
               }
            }
         },
         {
            "org": {
               "orgKey": 100528870,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459544242000,
               "description": "AGRICULTURE, DEPARTMENT OF",
               "fpdsOrgId": "1200",
               "fullParentPath": "100528870",
               "fullParentPathName": "AGRICULTURE_DEPARTMENT_OF",
               "ingestedOn": 1486152065021,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1484166614000,
               "name": "AGRICULTURE, DEPARTMENT OF",
               "orgCode": "ORG-1078",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1200",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "AGRICULTURE DEPARTMENT OF",
               "l1OrgKey": 100528870
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100528870"
               }
            }
         },
         {
            "org": {
               "orgKey": 100529002,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459545841000,
               "description": "INTERIOR, DEPARTMENT OF THE",
               "fpdsOrgId": "1400",
               "fullParentPath": "100529002",
               "fullParentPathName": "INTERIOR_DEPARTMENT_OF_THE",
               "ingestedOn": 1486152066876,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1484771422000,
               "name": "INTERIOR, DEPARTMENT OF THE",
               "orgCode": "ORG-1073",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1400",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "INTERIOR DEPARTMENT OF THE",
               "l1OrgKey": 100529002
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100529002"
               }
            }
         },
         {
            "org": {
               "orgKey": 100529330,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459548574000,
               "description": "COMMERCE, DEPARTMENT OF",
               "fpdsOrgId": "1300",
               "fullParentPath": "100529330",
               "fullParentPathName": "COMMERCE_DEPARTMENT_OF",
               "ingestedOn": 1486152071735,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1484166615000,
               "name": "COMMERCE, DEPARTMENT OF",
               "orgCode": "ORG-1072",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1300",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "COMMERCE DEPARTMENT OF",
               "l1OrgKey": 100529330
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100529330"
               }
            }
         },
         {
            "org": {
               "orgKey": 100529539,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459550589000,
               "description": "LABOR, DEPARTMENT OF",
               "fpdsOrgId": "1600",
               "fullParentPath": "100529539",
               "fullParentPathName": "LABOR_DEPARTMENT_OF",
               "ingestedOn": 1486152074417,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1485894616000,
               "name": "LABOR, DEPARTMENT OF",
               "orgCode": "ORG-1071",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1600",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "LABOR DEPARTMENT OF",
               "l1OrgKey": 100529539
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100529539"
               }
            }
         },
         {
            "org": {
               "orgKey": 100529548,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459550797000,
               "description": "GENERAL SERVICES ADMINISTRATION",
               "fpdsOrgId": "4700",
               "fullParentPath": "100529548",
               "fullParentPathName": "GENERAL_SERVICES_ADMINISTRATION",
               "ingestedOn": 1486152074514,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1485981008000,
               "name": "GENERAL SERVICES ADMINISTRATION",
               "orgCode": "ORG-1042",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "4700",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "GENERAL SERVICES ADMINISTRATION",
               "l1OrgKey": 100529548
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100529548"
               }
            }
         },
         {
            "org": {
               "orgKey": 100529679,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459558295000,
               "description": "HOUSING AND URBAN DEVELOPMENT, DEPARTMENT OF",
               "fpdsOrgId": "8600",
               "fullParentPath": "100529679",
               "fullParentPathName": "HOUSING_AND_URBAN_DEVELOPMENT_DEPARTMENT_OF",
               "ingestedOn": 1486152076197,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1485894617000,
               "name": "HOUSING AND URBAN DEVELOPMENT, DEPARTMENT OF",
               "orgCode": "ORG-1063",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "8600",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "HOUSING AND URBAN DEVELOPMENT DEPARTMENT OF",
               "l1OrgKey": 100529679
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100529679"
               }
            }
         },
         {
            "org": {
               "orgKey": 100529714,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459558452000,
               "description": "TRANSPORTATION, DEPARTMENT OF",
               "fpdsOrgId": "6900",
               "fullParentPath": "100529714",
               "fullParentPathName": "TRANSPORTATION_DEPARTMENT_OF",
               "ingestedOn": 1486152076641,
               "isSourceFpds": true,
               "lastModifiedBy": "JASON.JOHNSON@DOT.GOV",
               "lastModifiedDate": 1485950944000,
               "name": "TRANSPORTATION, DEPARTMENT OF",
               "orgCode": "ORG-1070",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "6900",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "TRANSPORTATION DEPARTMENT OF",
               "l1OrgKey": 100529714
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100529714"
               }
            }
         },
         {
            "org": {
               "orgKey": 100529719,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459705531000,
               "description": "HEALTH AND HUMAN SERVICES, DEPARTMENT OF",
               "fpdsOrgId": "7500",
               "fullParentPath": "100529719",
               "fullParentPathName": "HEALTH_AND_HUMAN_SERVICES_DEPARTMENT_OF",
               "ingestedOn": 1486152076691,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1486067419000,
               "name": "HEALTH AND HUMAN SERVICES, DEPARTMENT OF",
               "orgCode": "ORG-1067",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "7500",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "HEALTH AND HUMAN SERVICES DEPARTMENT OF",
               "l1OrgKey": 100529719
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100529719"
               }
            }
         },
         {
            "org": {
               "orgKey": 100529811,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1463689816000,
               "description": "ADMINISTRATIVE OFFICE OF THE U.S. COURTS",
               "fpdsOrgId": "1027",
               "fullParentPath": "100529811",
               "fullParentPathName": "ADMINISTRATIVE_OFFICE_OF_THE_US_COURTS",
               "ingestedOn": 1486152077892,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1485808210000,
               "name": "ADMINISTRATIVE OFFICE OF THE U.S. COURTS",
               "orgCode": "ORG-1107",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1027",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "ADMINISTRATIVE OFFICE OF THE US COURTS",
               "l1OrgKey": 100529811
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100529811"
               }
            }
         },
         {
            "org": {
               "orgKey": 100531075,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1484598617000,
               "description": "VETERANS AFFAIRS, DEPARTMENT OF",
               "fpdsOrgId": "3600",
               "fullParentPath": "100531075",
               "fullParentPathName": "VETERANS_AFFAIRS_DEPARTMENT_OF",
               "ingestedOn": 1486152095864,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1484685018000,
               "name": "VETERANS AFFAIRS, DEPARTMENT OF",
               "orgCode": "ORG-1173",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "3600",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "VETERANS AFFAIRS DEPARTMENT OF",
               "l1OrgKey": 100531075
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100531075"
               }
            }
         },
         {
            "org": {
               "orgKey": 100531348,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1485510718000,
               "description": "NORTHERN BORDER REGIONAL COMMISSION",
               "fpdsOrgId": "9557",
               "fullParentPath": "100531348",
               "fullParentPathName": "NORTHERN_BORDER_REGIONAL_COMMISSION",
               "ingestedOn": 1486152100295,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1485510718000,
               "name": "NORTHERN BORDER REGIONAL COMMISSION",
               "orgCode": "ORG-5542",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9557",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "NORTHERN BORDER REGIONAL COMMISSION",
               "l1OrgKey": 100531348
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100531348"
               }
            }
         },
         {
            "org": {
               "orgKey": 100532424,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1486153859000,
               "description": "AGRICULTURE, DEPARTMENT OF",
               "fpdsOrgId": "1200",
               "fullParentPath": "100532424",
               "fullParentPathName": "AGRICULTURE_DEPARTMENT_OF",
               "ingestedOn": 1486465463839,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1486413015000,
               "name": "AGRICULTURE, DEPARTMENT OF",
               "orgCode": "ORG-1078",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1200",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "AGRICULTURE DEPARTMENT OF",
               "l1OrgKey": 100532424
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100532424"
               }
            }
         },
         {
            "org": {
               "orgKey": 100532413,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1468528214000,
               "description": "VETERANS AFFAIRS, DEPARTMENT OF",
               "fpdsOrgId": "3600",
               "fullParentPath": "100532413",
               "fullParentPathName": "VETERANS_AFFAIRS_DEPARTMENT_OF",
               "ingestedOn": 1486465463675,
               "isSourceFpds": true,
               "lastModifiedBy": "CANDACE.WOOD.EAS@VA.GOV",
               "lastModifiedDate": 1486376585000,
               "name": "VETERANS AFFAIRS, DEPARTMENT OF",
               "orgCode": "ORG-1173",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "3600",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "VETERANS AFFAIRS DEPARTMENT OF",
               "l1OrgKey": 100532413
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100532413"
               }
            }
         },
         {
            "org": {
               "orgKey": 100532721,
               "endDate": 1085011200000,
               "fpdsCode": "HBVJ",
               "fpdsOrgId": "HBVJ",
               "fullParentPath": "100532721",
               "fullParentPathName": "NJKLNOUINUJ",
               "ingestedOn": 1484870400000,
               "isSourceFpds": true,
               "name": "NJKLNOUINUJ",
               "startDate": 1085011200000,
               "type": "DEPARTMENT",
               "level": 1,
               "code": "HBVJ",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "NJKLNOUINUJ",
               "l1OrgKey": 100532721
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100532721"
               }
            }
         },
         {
            "org": {
               "orgKey": 100532722,
               "endDate": 1120003200000,
               "fpdsCode": "AFRH",
               "fpdsOrgId": "AFRH",
               "fullParentPath": "100532722",
               "fullParentPathName": "ARMED_FORCES_RETIREMENT_HOME",
               "ingestedOn": 1484870400000,
               "isSourceFpds": true,
               "name": "ARMED FORCES RETIREMENT HOME",
               "startDate": 1066694400000,
               "type": "DEPARTMENT",
               "level": 1,
               "code": "AFRH",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "ARMED FORCES RETIREMENT HOME",
               "l1OrgKey": 100532722
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100532722"
               }
            }
         },
         {
            "org": {
               "orgKey": 100532723,
               "endDate": 1085011200000,
               "fpdsCode": "NJNJ",
               "fpdsOrgId": "NJNJ",
               "fullParentPath": "100532723",
               "fullParentPathName": "BNJBNIKJN",
               "ingestedOn": 1484870400000,
               "isSourceFpds": true,
               "name": "BNJBNIKJN",
               "startDate": 1085011200000,
               "type": "DEPARTMENT",
               "level": 1,
               "code": "NJNJ",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "BNJBNIKJN",
               "l1OrgKey": 100532723
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100532723"
               }
            }
         },
         {
            "org": {
               "orgKey": 100532724,
               "fpdsCode": "5555",
               "fpdsOrgId": "5555",
               "fullParentPath": "100532724",
               "fullParentPathName": "FIVE",
               "ingestedOn": 1484870400000,
               "isSourceFpds": true,
               "name": "FIVE",
               "startDate": 1088121600000,
               "type": "DEPARTMENT",
               "level": 1,
               "code": "5555",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "FIVE",
               "l1OrgKey": 100532724
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100532724"
               }
            }
         },
         {
            "org": {
               "orgKey": 100533299,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-3",
               "createdBy": "FPDSADMIN",
               "createdDate": 1145045513000,
               "description": "DEPT OF DEFENSE",
               "fpdsOrgId": "9700",
               "fullParentPath": "100533299",
               "fullParentPathName": "DEPT_OF_DEFENSE",
               "ingestedOn": 1486938337090,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1486585836000,
               "name": "DEPT OF DEFENSE",
               "orgCode": "ORG-1144",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9700",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "DEPT OF DEFENSE",
               "l1OrgKey": 100533299
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100533299"
               }
            }
         },
         {
            "org": {
               "orgKey": 100537111,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459547407000,
               "description": "AGRICULTURE, DEPARTMENT OF",
               "fpdsOrgId": "1200",
               "fullParentPath": "100537111",
               "fullParentPathName": "AGRICULTURE_DEPARTMENT_OF",
               "ingestedOn": 1486938405515,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1486499412000,
               "name": "AGRICULTURE, DEPARTMENT OF",
               "orgCode": "ORG-1078",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1200",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "AGRICULTURE DEPARTMENT OF",
               "l1OrgKey": 100537111
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100537111"
               }
            }
         },
         {
            "org": {
               "orgKey": 100537257,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1485289812000,
               "description": "COMMERCE, DEPARTMENT OF",
               "fpdsOrgId": "1300",
               "fullParentPath": "100537257",
               "fullParentPathName": "COMMERCE_DEPARTMENT_OF",
               "ingestedOn": 1486938408788,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1486586054000,
               "name": "COMMERCE, DEPARTMENT OF",
               "orgCode": "ORG-1072",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1300",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "COMMERCE DEPARTMENT OF",
               "l1OrgKey": 100537257
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100537257"
               }
            }
         },
         {
            "org": {
               "orgKey": 100537279,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1486499414000,
               "description": "TRANSPORTATION, DEPARTMENT OF",
               "fpdsOrgId": "6900",
               "fullParentPath": "100537279",
               "fullParentPathName": "TRANSPORTATION_DEPARTMENT_OF",
               "ingestedOn": 1486938409813,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1486499414000,
               "name": "TRANSPORTATION, DEPARTMENT OF",
               "orgCode": "ORG-1070",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "6900",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "TRANSPORTATION DEPARTMENT OF",
               "l1OrgKey": 100537279
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100537279"
               }
            }
         },
         {
            "org": {
               "orgKey": 100538015,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-3",
               "createdBy": "FPDSADMIN",
               "createdDate": 1145045510000,
               "description": "DEPT OF DEFENSE",
               "fpdsOrgId": "9700",
               "fullParentPath": "100538015",
               "fullParentPathName": "DEPT_OF_DEFENSE",
               "ingestedOn": 1487343497750,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1487104238000,
               "name": "DEPT OF DEFENSE",
               "orgCode": "ORG-1144",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9700",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "DEPT OF DEFENSE",
               "l1OrgKey": 100538015
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100538015"
               }
            }
         },
         {
            "org": {
               "orgKey": 100538304,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459546171000,
               "description": "GENERAL SERVICES ADMINISTRATION",
               "fpdsOrgId": "4700",
               "fullParentPath": "100538304",
               "fullParentPathName": "GENERAL_SERVICES_ADMINISTRATION",
               "ingestedOn": 1487343503054,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1487104233000,
               "name": "GENERAL SERVICES ADMINISTRATION",
               "orgCode": "ORG-1042",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "4700",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "GENERAL SERVICES ADMINISTRATION",
               "l1OrgKey": 100538304
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100538304"
               }
            }
         },
         {
            "org": {
               "orgKey": 100538332,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459550220000,
               "description": "JUSTICE, DEPARTMENT OF",
               "fpdsOrgId": "1500",
               "fullParentPath": "100538332",
               "fullParentPathName": "JUSTICE_DEPARTMENT_OF",
               "ingestedOn": 1487343503413,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1487104232000,
               "name": "JUSTICE, DEPARTMENT OF",
               "orgCode": "ORG-1181",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1500",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "JUSTICE DEPARTMENT OF",
               "l1OrgKey": 100538332
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100538332"
               }
            }
         },
         {
            "org": {
               "orgKey": 100538357,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459558452000,
               "description": "TRANSPORTATION, DEPARTMENT OF",
               "fpdsOrgId": "6900",
               "fullParentPath": "100538357",
               "fullParentPathName": "TRANSPORTATION_DEPARTMENT_OF",
               "ingestedOn": 1487343503741,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1487104236000,
               "name": "TRANSPORTATION, DEPARTMENT OF",
               "orgCode": "ORG-1070",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "6900",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "TRANSPORTATION DEPARTMENT OF",
               "l1OrgKey": 100538357
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100538357"
               }
            }
         },
         {
            "org": {
               "orgKey": 100538370,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1473280213000,
               "description": "NATIONAL FOUNDATION ON THE ARTS AND THE HUMANITIES",
               "fpdsOrgId": "5900",
               "fullParentPath": "100538370",
               "fullParentPathName": "NATIONAL_FOUNDATION_ON_THE_ARTS_AND_THE_HUMANITIES",
               "ingestedOn": 1487343503886,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1487190623000,
               "name": "NATIONAL FOUNDATION ON THE ARTS AND THE HUMANITIES",
               "orgCode": "ORG-1005",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "5900",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "NATIONAL FOUNDATION ON THE ARTS AND THE HUMANITIES",
               "l1OrgKey": 100538370
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100538370"
               }
            }
         },
         {
            "org": {
               "orgKey": 100538443,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1487104231000,
               "description": "COMMERCE, DEPARTMENT OF",
               "fpdsOrgId": "1300",
               "fullParentPath": "100538443",
               "fullParentPathName": "COMMERCE_DEPARTMENT_OF",
               "ingestedOn": 1487343504771,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1487104231000,
               "name": "COMMERCE, DEPARTMENT OF",
               "orgCode": "ORG-1072",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1300",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "COMMERCE DEPARTMENT OF",
               "l1OrgKey": 100538443
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100538443"
               }
            }
         },
         {
            "org": {
               "orgKey": 100538691,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1487190623000,
               "description": "ENVIRONMENTAL PROTECTION AGENCY",
               "fpdsOrgId": "6800",
               "fullParentPath": "100538691",
               "fullParentPathName": "ENVIRONMENTAL_PROTECTION_AGENCY",
               "ingestedOn": 1487343787423,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1487233825000,
               "name": "ENVIRONMENTAL PROTECTION AGENCY",
               "orgCode": "ORG-1015",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "6800",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "ENVIRONMENTAL PROTECTION AGENCY",
               "l1OrgKey": 100538691
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100538691"
               }
            }
         },
         {
            "org": {
               "orgKey": 100538748,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1487277008000,
               "description": "STATE, DEPARTMENT OF",
               "fpdsOrgId": "1900",
               "fullParentPath": "100538748",
               "fullParentPathName": "STATE_DEPARTMENT_OF",
               "ingestedOn": 1487343788555,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1487277008000,
               "name": "STATE, DEPARTMENT OF",
               "orgCode": "ORG-1180",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1900",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "STATE DEPARTMENT OF",
               "l1OrgKey": 100538748
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100538748"
               }
            }
         },
         {
            "org": {
               "orgKey": 100538745,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1487277007000,
               "description": "AGRICULTURE, DEPARTMENT OF",
               "fpdsOrgId": "1200",
               "fullParentPath": "100538745",
               "fullParentPathName": "AGRICULTURE_DEPARTMENT_OF",
               "ingestedOn": 1487343788516,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1487277007000,
               "name": "AGRICULTURE, DEPARTMENT OF",
               "orgCode": "ORG-1078",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1200",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "AGRICULTURE DEPARTMENT OF",
               "l1OrgKey": 100538745
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100538745"
               }
            }
         },
         {
            "org": {
               "orgKey": 100539554,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-3",
               "createdBy": "FPDSADMIN",
               "createdDate": 1145046101000,
               "description": "DEPT OF DEFENSE",
               "fpdsOrgId": "9700",
               "fullParentPath": "100539554",
               "fullParentPathName": "DEPT_OF_DEFENSE",
               "ingestedOn": 1488193680386,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1487968221000,
               "name": "DEPT OF DEFENSE",
               "orgCode": "ORG-1144",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9700",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "DEPT OF DEFENSE",
               "l1OrgKey": 100539554
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100539554"
               }
            }
         },
         {
            "org": {
               "orgKey": 100539577,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "00.MICHELLE.COLEMAN@GSA.GOV",
               "createdDate": 1371646902000,
               "description": "EXPORT-IMPORT BANK OF THE U.S.",
               "fpdsOrgId": "8300",
               "fullParentPath": "100539577",
               "fullParentPathName": "EXPORTIMPORT_BANK_OF_THE_US",
               "ingestedOn": 1488193680902,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1487925848000,
               "name": "EXPORT-IMPORT BANK OF THE U.S.",
               "orgCode": "ORG-1061",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "8300",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "EXPORTIMPORT BANK OF THE US",
               "l1OrgKey": 100539577
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100539577"
               }
            }
         },
         {
            "org": {
               "orgKey": 100539611,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1459546519000,
               "description": "JUSTICE, DEPARTMENT OF",
               "fpdsOrgId": "1500",
               "fullParentPath": "100539611",
               "fullParentPathName": "JUSTICE_DEPARTMENT_OF",
               "ingestedOn": 1488193681714,
               "isSourceFpds": true,
               "lastModifiedBy": "FRED.MUSSER@USDOJ.GOV",
               "lastModifiedDate": 1487947027000,
               "name": "JUSTICE, DEPARTMENT OF",
               "orgCode": "ORG-1181",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1500",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "JUSTICE DEPARTMENT OF",
               "l1OrgKey": 100539611
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100539611"
               }
            }
         },
         {
            "org": {
               "orgKey": 100539717,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1487968216000,
               "description": "HEALTH AND HUMAN SERVICES, DEPARTMENT OF",
               "fpdsOrgId": "7500",
               "fullParentPath": "100539717",
               "fullParentPathName": "HEALTH_AND_HUMAN_SERVICES_DEPARTMENT_OF",
               "ingestedOn": 1488193683664,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1487968216000,
               "name": "HEALTH AND HUMAN SERVICES, DEPARTMENT OF",
               "orgCode": "ORG-1067",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "7500",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "HEALTH AND HUMAN SERVICES DEPARTMENT OF",
               "l1OrgKey": 100539717
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100539717"
               }
            }
         },
         {
            "org": {
               "orgKey": 100539708,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1487925805000,
               "description": "ENERGY, DEPARTMENT OF",
               "fpdsOrgId": "8900",
               "fullParentPath": "100539708",
               "fullParentPathName": "ENERGY_DEPARTMENT_OF",
               "ingestedOn": 1488193683555,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1487925805000,
               "name": "ENERGY, DEPARTMENT OF",
               "orgCode": "ORG-1056",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "8900",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "ENERGY DEPARTMENT OF",
               "l1OrgKey": 100539708
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100539708"
               }
            }
         },
         {
            "org": {
               "orgKey": 100539713,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "FPDSADMIN",
               "createdDate": 1487928315000,
               "description": "MORRIS K. UDALL SCHOLARSHIP AND EXCELLENCE IN NATIONAL ENVIRONMENTAL POLICY FOUNDATION",
               "fpdsOrgId": "9545",
               "fullParentPath": "100539713",
               "fullParentPathName": "MORRIS_K_UDALL_SCHOLARSHIP_AND_EXCELLENCE_IN_NATIONAL_ENVIRONMENTAL_POLICY_FOUNDATION",
               "ingestedOn": 1488193683617,
               "isSourceFpds": true,
               "lastModifiedBy": "FPDSADMIN",
               "lastModifiedDate": 1487928315000,
               "name": "MORRIS K. UDALL SCHOLARSHIP AND EXCELLENCE IN NATIONAL ENVIRONMENTAL POLICY FOUNDATION",
               "orgCode": "ORG-1217",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9545",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "MORRIS K UDALL SCHOLARSHIP AND EXCELLENCE IN NATIONAL ENVIRONMENTAL POLICY FOUNDATION",
               "l1OrgKey": 100539713
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100539713"
               }
            }
         },
         {
            "org": {
               "orgKey": 100000391,
               "a11TacCode": 86,
               "agencyName": "Department of Housing and Urban Development",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "14",
               "cfdaOmb": 25,
               "createdBy": "",
               "createdDate": 838684800000,
               "description": "HOUSING AND URBAN DEVELOPMENT, DEPARTMENT OF",
               "fpdsCode": "8600",
               "fpdsOrgId": "8600",
               "cgac": "086",
               "fullParentPath": "100000391",
               "fullParentPathName": "HOUSING_AND_URBAN_DEVELOPMENT_DEPARTMENT_OF",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 838684800000,
               "name": "HOUSING AND URBAN DEVELOPMENT, DEPARTMENT OF",
               "ombAgencyCode": "25",
               "orgCode": "ORG-1063",
               "shortName": "",
               "sourceCfdaPk": "00b2effb6012d0963a180ef3a7374f13",
               "sourceParentCfdaPk": "",
               "summary": " The Assistant Secretary for Housing-Federal Housing Commissioner directs the Department's housing functions.  He or she oversees aid for the construction and financing of new and rehabilitated housing and the preservation of existing housing.  The Assistant Secretary is responsible for:  Underwriting single family, multifamily, property improvement, and manufactured home loans; administering special purpose programs designed specifically for the elderly, the handicapped, and the chronically mentally ill; administering assisted housing programs for low-income families who are experiencing difficulties affording standard housing; administering grants to fund resident ownership of multifamily housing properties; protecting consumers against fraudulent practices of land developers and promoters, and administering housing development grants, where HUD provides grants to cities, urban counties, and States acting on behalf of local governments to support the development of rental housing in areas with severe rental housing shortages.  Grantees use the HUD funds to provide capital grants or loans, interest-reduction payments, rental subsidies, or other types of assistance to facilitate the construction or substantial rehabilitation of rental projects by private owners. The Assistant Secretary for Community Planning and Development administers the grant programs that help communities plan and finance their growth and development, increase their capacity to govern, and provide shelter and services for homeless people.  In addition, the Assistant Secretary is responsible for: Community Development Block Grant (CDBG) Programs for Entitlement Communities, States and HUD- administered Small Cities, Section 108 Community Development Loan Guarantees, and Special Purpose Grants for Insular Areas, Historically Black Colleges and Universities, and Technical Assistance; Home Investment in Affordable Housing (HOME), providing Federal assistance for use by participating jurisdictions or Indian tribes for housing rehabilitation, tenant-based assistance, assistance to first time homebuyers and new construction when a jurisdiction is determined to need new rental housing; the Department's programs to address homelessness, including the Supportive Housing Program (Transitional Housing and Permanent Housing components), Shelter Plus Care, Surplus Property for Use to Assist the Homeless, Section 8 Moderate Rehabilitation Single Room Occupancy (SRO) Program, Housing Opportunities for Persons with AIDS, and Emergency Shelter Grants; The Youthbuild Program to provide opportunities and assistance to very low-income young adults who have dropped out of high school; Consolidated Plans; and Empowerment Zones and Enterprise Communities. The Assistant Secretary for Public and Indian Housing (PIH) directs the Department's low-income public housing program.  This program provides funds for the development, operation, and modernization of public housing, including such housing for American Indians.  It also promotes resident management and ownership of public housing.  PIH administers Public and Indian Housing Programs, including rental and homeownership programs and provides technical and financial assistance in planning, developing, and managing low-income projects; provides operating subsidies for Public Housing Agencies (PHAs) and Indian Housing Authorities (IHAs), including procedures for the review of the management of PHAs and IHAs; administers the Capital Fund Program for the modernization of low-income housing projects to upgrade living conditions, correct physical deficiencies, and achieve operating efficiency and economy; administers the Resident Initiatives Program for resident participation, resident management; homeownership, economic development and supportive services, and drug-free neighborhood programs; implements and monitors program requirements related to program eligibility and admission of families to public and assisted housing, tenant income and rent requirements pertaining to continued occupancy; administers the HOPE VI and Vacancy Reductions Programs; administers the Section 8 Housing Choice Vouchers Program and the Moderate Rehabilitation Program; coordinates all departmental housing and community development programs for Indian and Alaska Natives; and awards grants to PHAs and IHAs for the construction, acquisition and operations of Public and Indian Housing Projects. The Office is responsible for: Increasing awareness of the public and building industry of the dangers of lead-based paint poisoning and the options for detection, risk reduction, and abatement; encouraging the development of safer, more effective, and less costly methods for detection, risk reduction, and abatement; encouraging State and local governments to develop lead-based paint programs covering primary prevention, public education, certification of contractors, hazard reduction, financing, and enforcement.",
               "tas2Code": "86",
               "tas3Code": "86",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "8600",
               "orgAddresses": [
                  {
                     "addressKey": 100272388,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208874070000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319913000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "HOUSING AND URBAN DEVELOPMENT DEPARTMENT OF",
               "l1OrgKey": 100000391
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100000391"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100000391.bmp"
               }
            }
         },
         {
            "org": {
               "orgKey": 100000136,
               "a11TacCode": 69,
               "agencyName": "Department of Transportation",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "20",
               "cfdaOmb": 21,
               "createdBy": "",
               "createdDate": 838684800000,
               "description": "TRANSPORTATION, DEPARTMENT OF",
               "fpdsCode": "6900",
               "fpdsOrgId": "6900",
               "cgac": "069",
               "fullParentPath": "100000136",
               "fullParentPathName": "TRANSPORTATION_DEPARTMENT_OF",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1270771200000,
               "name": "TRANSPORTATION, DEPARTMENT OF",
               "ombAgencyCode": "21",
               "orgCode": "ORG-1070",
               "shortName": "",
               "sourceCfdaPk": "8f68cf18fbccc7080f190667866fca58",
               "sourceParentCfdaPk": "",
               "summary": " Under the authority of the motor carrier safety provisions of Title 49 of the United States Code, the agency exercises Federal regulatory jurisdiction over the safety performance of all commercial motor carriers engaged in interstate commerce.  It deals with more than 500,000 carriers, approximately 13,000 passenger carriers and 42,000 hazardous material carriers.  The primary mission of the Agency is to improve the safety of commercial vehicle operations on our nation's highways.  To accomplish this mission the FMCSA focuses its efforts on reducing the number and severity of large truck-involved crashes through safety regulation and research, safety in commercial operations through training and enforcement, improvements to the commercial driver's license program, and enhancing highway and transportation systems infrastructure.  To accomplish these activities, the FMCSA works closely in partnership with other Federal and State agencies, private organizations and individuals.  The FMCSA works with various governmental agencies, the commercial motor vehicle industry and other interested groups to promote truck and bus safety by addressing vehicle safety issues such as the mechanical condition of trucks and buses, infrastructure improvements including high profile grade crossings, and commercial operations such as commercial driver license and hours- of-service regulations.",
               "tas2Code": "69",
               "tas3Code": "69",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "6900",
               "orgAddresses": [
                  {
                     "addressKey": 100272434,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208874663000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "45ef5ff2e2a4c4ab07925d1302c31be6",
                     "lastModifiedDate": 1444211461000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "TRANSPORTATION DEPARTMENT OF",
               "l1OrgKey": 100000136
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100000136"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100000136.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100000266,
               "a11TacCode": 80,
               "agencyName": "National Aeronautics and Space Administration",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "43",
               "cfdaOmb": 26,
               "createdBy": "",
               "createdDate": 838684800000,
               "description": "NATIONAL AERONAUTICS AND SPACE ADMINISTRATION",
               "fpdsCode": "8000",
               "fpdsOrgId": "8000",
               "cgac": "080",
               "fullParentPath": "100000266",
               "fullParentPathName": "NATIONAL_AERONAUTICS_AND_SPACE_ADMINISTRATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1084320000000,
               "name": "NATIONAL AERONAUTICS AND SPACE ADMINISTRATION",
               "orgCode": "ORG-1060",
               "shortName": "",
               "sourceCfdaPk": "749a1ba1c0b78d0e3f13a7997c05fca2",
               "sourceParentCfdaPk": "",
               "summary": "Conducts research to solve problems of flight within and outside Earth atmosphere.  Develops, constructs, tests, and operates aeronautical and space vehicles. Conducts activities required for the exploration of space with manned and unmanned vehicles; arranges for the most effective utilization of the scientific and engineering resources of the United States with other nations engaged in aeronautical and space activities for peaceful purposes.",
               "tas2Code": "80",
               "tas3Code": "80",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "8000",
               "orgAddresses": [
                  {
                     "addressKey": 100272423,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate": 1208950406000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "84642021e86c11dd5b390f51b91eae34",
                     "lastModifiedDate": 1235728329000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "NATIONAL AERONAUTICS AND SPACE ADMINISTRATION",
               "l1OrgKey": 100000266
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100000266"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100000266.png"
               }
            }
         },
         {
            "org": {
               "orgKey": 100035122,
               "a11TacCode": 13,
               "agencyName": "Department of Commerce",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "11",
               "cfdaOmb": 6,
               "createdBy": "",
               "createdDate": 838684800000,
               "description": "COMMERCE, DEPARTMENT OF",
               "fpdsCode": "1300",
               "fpdsOrgId": "1300",
               "cgac": "013",
               "fullParentPath": "100035122",
               "fullParentPathName": "COMMERCE_DEPARTMENT_OF",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1440633600000,
               "name": "COMMERCE, DEPARTMENT OF",
               "ombAgencyCode": "6",
               "orgCode": "ORG-1072",
               "shortName": "",
               "sourceCfdaPk": "eb778728054c2bb65dab9a6138e024c9",
               "sourceParentCfdaPk": "",
               "tas2Code": "13",
               "tas3Code": "13",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1300",
               "orgAddresses": [
                  {
                     "addressKey": 100272456,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208872179000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320264000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "COMMERCE DEPARTMENT OF",
               "l1OrgKey": 100035122
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100035122"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100035122.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100001616,
               "a11TacCode": 91,
               "agencyName": "Department of Education",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "84",
               "cfdaOmb": 18,
               "createdBy": "",
               "createdDate": 838684800000,
               "description": "EDUCATION, DEPARTMENT OF",
               "fpdsCode": "9100",
               "fpdsOrgId": "9100",
               "cgac": "091",
               "fullParentPath": "100001616",
               "fullParentPathName": "EDUCATION_DEPARTMENT_OF",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1249862400000,
               "name": "EDUCATION, DEPARTMENT OF",
               "ombAgencyCode": "18",
               "orgCode": "ORG-1054",
               "shortName": "",
               "sourceCfdaPk": "c501e7fcea3b41e870f21a02a5c4f5db",
               "sourceParentCfdaPk": "",
               "summary": "Administers programs designed to fund activities that assist students with limited English proficiency and minority languages populations by providing support for programs, activities, and management initiatives meeting the special educational needs of those populations. Provides national leadership in expanding fundamental knowledge and improving education. The Office is responsible for conducting and supporting education-related research activities; monitoring the state of education through the collection and analysis of statistical data; promoting the use and application of research and development to improve instructional practices in the classroom; and disseminating these findings to States and local education entities. The Assistant Secretary for Elementary and Secondary Education formulates policy for, directs, and coordinates the activities relating to preschool, elementary, and secondary education.  Included are programs of grants to State educational agencies and local school districts, postsecondary schools, and nonprofit organizations for State and local reform, compensatory, migrant, and Indian education; drug-free schools; other school improvement programs; and impact aid. The Assistant Secretary for Postsecondary Education formulates policy, directs, and coordinates programs for assistance to postsecondary educational institutions and students pursuing a postsecondary education.  Programs include assistance for the improvement and expansion of American educational resources for international studies and services, grants to improve instruction in crucial academic subjects, and construction assistance for academic facilities. The Office is headed by the Department's Chief Operating Officer and is the Federal Government's first performance based organization.  The Office directs and coordinates activities that provide financial assistance through grants and work and loan programs to students pursuing a postsecondary education.  Federal student financial aid programs include Stafford Loans, Parent Loans for Undergraduate Students (PLUS), Supplemental Loans to Students (SLS), Federal Insured Student Loans (FISL), consolidated loans, Perkins Loans, income contingent loans, Pell Grants, College Work-Study, Supplemental Educational Opportunity Grants (SEOG), and State Student Incentives Grants (SSIG).  The Office provides leadership and direction for the Department in meeting its goals of excellence in credit management and debt collection through the collection of defaulted loans under the Guaranteed Student Loan Program and the Law Enforcement Education Program, and the collection of overpayments in the Pell Grant Program and Supplemental Educational Opportunities Program. The Assistant Secretary for Vocational and Adult Education administers programs of grants, contracts, and technical assistance for vocational and technical education, and for adult education and literacy.  The Office is also responsible for coordinating these programs with other Education Department and Federal programs supporting services and research for adult education, literacy, and occupational training. The Secretary of Education advises the President on education plans, policies, and programs of the Federal government. The Secretary directs Department staff in carrying out the approved programs and activities of the Department and promotes general public understanding of the Department's goals, programs, and objectives.  The Secretary also carries out certain Federal responsibilities for four federally aided corporations:  The American Printing House of the Blind, Gallaudet University, Howard University, and the National Technical Institute for the Deaf. Provides leadership to ensure that people with disabilities have services, resources, and equal opportunities to learn, work, and live as fully integrated, contributing members of society. The Office coordinates the activities of the Office of Special Education Programs, which works to help States provide quality educational opportunities and early intervention services to help students with disabilities achieve their goals. Through the Rehabilitation Services Administration, the Office supports State vocational rehabilitation programs that give disabled people the education, job training, and job placement services they need to gain meaningful employment.  Programs include support for training of teachers and other professional personnel; grants for research; financial aid to help States initiate, expand, and improve their resources; and media services and captioned films for the deaf. Each regional office serves as a center for the dissemination of information and provides technical assistance to State and local educational agencies and other institutions and individuals interested in Federal education activities.  At present, offices are located in 10 cities:  Atlanta, Boston, Chicago, Dallas, Denver, Kansas City, New York, Philadelphia, San Francisco, and Seattle.",
               "tas2Code": "91",
               "tas3Code": "91",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9100",
               "orgAddresses": [
                  {
                     "addressKey": 100272449,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208872281000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319901000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "EDUCATION DEPARTMENT OF",
               "l1OrgKey": 100001616
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100001616"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100001616.bmp"
               }
            }
         },
         {
            "org": {
               "orgKey": 100002228,
               "a11TacCode": 95,
               "agencyName": "Commodity Futures Trading Commission",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "78",
               "cfdaOmb": 339,
               "createdBy": "",
               "createdDate": 838684800000,
               "description": "COMMODITY FUTURES TRADING COMMISSION",
               "fpdsCode": "9507",
               "fpdsOrgId": "9507",
               "cgac": "339",
               "fullParentPath": "100002228",
               "fullParentPathName": "COMMODITY_FUTURES_TRADING_COMMISSION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1454457600000,
               "name": "COMMODITY FUTURES TRADING COMMISSION",
               "ombAgencyCode": "339",
               "orgCode": "ORG-1004",
               "shortName": "",
               "sourceCfdaPk": "7fbf44d22473394ff16027650aaedd96",
               "sourceParentCfdaPk": "",
               "summary": "Promotes healthy economic growth, protects the rights of customers, and ensures fairness and integrity in the marketplace through regulation of futures trading.  To this end it also engages in the analysis of economic issues affected by or affecting futures trading.",
               "tas2Code": "95",
               "tas3Code": "339",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9507",
               "orgAddresses": [
                  {
                     "addressKey": 100272427,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208864498000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319603000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "COMMODITY FUTURES TRADING COMMISSION",
               "l1OrgKey": 100002228
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100002228"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100002228.png"
               }
            }
         },
         {
            "org": {
               "orgKey": 100004222,
               "a11TacCode": 75,
               "agencyName": "Department of Health and Human Services",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "93",
               "cfdaOmb": 9,
               "createdBy": "",
               "createdDate": 838684800000,
               "description": "HEALTH AND HUMAN SERVICES, DEPARTMENT OF",
               "fpdsCode": "7500",
               "fpdsOrgId": "7500",
               "cgac": "075",
               "fullParentPath": "100004222",
               "fullParentPathName": "HEALTH_AND_HUMAN_SERVICES_DEPARTMENT_OF",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 838684800000,
               "name": "HEALTH AND HUMAN SERVICES, DEPARTMENT OF",
               "ombAgencyCode": "9",
               "orgCode": "ORG-1067",
               "shortName": "HHS",
               "sourceCfdaPk": "0bebbc3b3261e255dc82002b83094717",
               "sourceParentCfdaPk": "",
               "summary": "The Secretary of HHS advises the President on health, welfare, and income security plans, policies, and programs of the Federal government. The Secretary administers these functions through the Office of the Secretary and the Department's 11 operating divisions, including a budget of $460 billion and a workforce of 65,000 employees.  Supports cross-cutting research on health care systems, health care quality and cost issues, and effectiveness of medical treatments. Provides a system of health surveillance to monitor and prevent the outbreak of diseases.  With the assistance of States and other partners, CDC guards against international disease transmission, maintains national health statistics and provides for immunization services, and supports research into disease and injury prevention. Supports a network of 37 hospitals, 60 health centers, 3 school health centers, 46 health stations and 34 urban Indian health centers to provide services to nearly 1.5 million American Indians and Alaska Natives of 557 federally recognized tribes.  Administers the Medicare and Medicaid programs, that provide health care to America's aged and indigenous populations.  About one in every four Americans, including nearly 18 million children and nursing homes for low-income elderly persons are covered.  CMS also administers the new Children's Health Insurance Program through approved State plans that cover more than 2.2 million children.",
               "tas2Code": "75",
               "tas3Code": "75",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "7500",
               "orgAddresses": [
                  {
                     "addressKey": 100272393,
                     "city": "Washington",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208872391000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320031000,
                     "state": "DC",
                     "streetAddress": "Hubert H. Humphrey Building 200 Independence Avenue, SW ",
                     "type": "M",
                     "zipcode": "20201"
                  }
               ],
               "hierarchy": [],
               "l1Name": "HEALTH AND HUMAN SERVICES DEPARTMENT OF",
               "l1OrgKey": 100004222
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100004222"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100004222.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100006568,
               "a11TacCode": 36,
               "agencyName": "Department of Veterans Affairs",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "64",
               "cfdaOmb": 29,
               "createdBy": "",
               "createdDate": 838684800000,
               "description": "VETERANS AFFAIRS, DEPARTMENT OF",
               "fpdsCode": "3600",
               "fpdsOrgId": "3600",
               "cgac": "036",
               "fullParentPath": "100006568",
               "fullParentPathName": "VETERANS_AFFAIRS_DEPARTMENT_OF",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1343865600000,
               "name": "VETERANS AFFAIRS, DEPARTMENT OF",
               "ombAgencyCode": "29",
               "orgCode": "ORG-1173",
               "shortName": "",
               "sourceCfdaPk": "6e8d2e2e8eef856f8905b0b163163f08",
               "sourceParentCfdaPk": "",
               "summary": "Administers the National Cemetery Administration, which provides cemeterial services to veterans and other eligibles as prescribed by the Secretary of Veterans Affairs pursuant to the provisions of the National Cemeteries Act of 1973 and other statutory authorities and regulations.  These services also include providing headstones and markers for the graves of eligibles in national and State veterans cemeteries and for veterans interred in private cemeteries.  Monetary aid to States for establishment, expansion, and improvement of veterans' cemeteries is also available.",
               "tas2Code": "36",
               "tas3Code": "36",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "3600",
               "orgAddresses": [
                  {
                     "addressKey": 100272420,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208874723000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319939000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "VETERANS AFFAIRS DEPARTMENT OF",
               "l1OrgKey": 100006568
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100006568"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100006568.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100006688,
               "a11TacCode": 47,
               "agencyName": "General Services Administration",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "39",
               "cfdaOmb": 23,
               "createdBy": "",
               "createdDate": 1055289600000,
               "description": "GENERAL SERVICES ADMINISTRATION",
               "fpdsCode": "4700",
               "fpdsOrgId": "4700",
               "cgac": "047",
               "fullParentPath": "100006688",
               "fullParentPathName": "GENERAL_SERVICES_ADMINISTRATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1055289600000,
               "name": "GENERAL SERVICES ADMINISTRATION",
               "ombAgencyCode": "23",
               "orgCode": "ORG-1042",
               "shortName": "",
               "sourceCfdaPk": "9eb645ae12f3ff6f0eaa94b8ee10d7c2",
               "sourceParentCfdaPk": "",
               "summary": "Establishes policy and provides for the Government an economical and efficient system for the management of its property including construction and operation of buildings, procurement and distribution of supplies, utilization and disposal of property, transportation, and travel management, and management of Government-wide information technology solutions and network services.  GSA is organized much like a large corporation doing business in a number of different fields.  It consists of operating services and supporting staff offices, with functions carried out at three levels of organization:  The Central office, regional offices, and field activities.  (See Appendix IV of the Catalog for a listing of these offices.)  Various publications and catalogs published by GSA include:  1) The Catalog of Federal Domestic Assistance published jointly by GSA and the Office of Management and Budget; and 2) the Consumer Information Catalog which lists selected Federal publications of interest to consumers.  GSA also administers the Federal Information Centers (FCIC) which are focal points for Information about the Federal government's services, programs, and regulations.",
               "tas2Code": "47",
               "tas3Code": "47",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "4700",
               "orgAddresses": [
                  {
                     "addressKey": 100272441,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate": 1208882030000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "3ba0cb09903a48e06a20d00e6df474ec",
                     "lastModifiedDate": 1445442452000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "GENERAL SERVICES ADMINISTRATION",
               "l1OrgKey": 100006688
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100006688"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100006688.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500164,
               "a11TacCode": 25,
               "agencyName": "National Credit Union Administration",
               "cfdaBur": 0,
               "cfdaCode": "44",
               "cfdaOmb": 415,
               "createdBy": "",
               "fpdsCode": "",
               "cgac": "415",
               "fullParentPath": "100500164",
               "fullParentPathName": "NATIONAL_CREDIT_UNION_ADMINISTRATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "lastModifiedBy": "",
               "name": "NATIONAL CREDIT UNION ADMINISTRATION",
               "ombAgencyCode": "415",
               "shortName": "",
               "sourceCfdaPk": "5967f215b6dbe580a11b60e390bbe729",
               "sourceParentCfdaPk": "",
               "summary": "The National Credit Union Administration Board is responsible for chartering, insuring, supervising, and examining Federal credit unions and administering the National Credit Union Share Insurance Fund. The Board also manages the Central Liquidity Facility, a mixed-ownership Government corporation whose purpose is to supply emergency loans to member credit unions.",
               "tas2Code": "25",
               "tas3Code": "25",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "",
               "orgAddresses": [
                  {
                     "addressKey": 100272414,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate": 1208969956000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320472000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "NATIONAL CREDIT UNION ADMINISTRATION",
               "l1OrgKey": 100500164
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500164"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100500164.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100011800,
               "a11TacCode": 45,
               "agencyName": "Equal Employment Opportunity Commission",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "30",
               "cfdaOmb": 350,
               "createdBy": "",
               "createdDate": 838684800000,
               "description": "EQUAL EMPLOYMENT OPPORTUNITY COMMISSION",
               "fpdsCode": "4500",
               "fpdsOrgId": "4500",
               "cgac": "045",
               "fullParentPath": "100011800",
               "fullParentPathName": "EQUAL_EMPLOYMENT_OPPORTUNITY_COMMISSION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1099958400000,
               "name": "EQUAL EMPLOYMENT OPPORTUNITY COMMISSION",
               "ombAgencyCode": "350",
               "orgCode": "ORG-1177",
               "shortName": "",
               "sourceCfdaPk": "6b9177c91b930a1b852571bdfd8e190d",
               "sourceParentCfdaPk": "",
               "summary": "Eliminates discrimination based on race, color, religion, sex, national origin, age or disability in hiring, promotion, firing, wages, testing, training, apprenticeship, and all other conditions of employment.  The Commission also promotes voluntary action programs by employers, unions, and community organizations to make equal employment opportunity an actuality.  EEOC also has oversight responsibility for all compliance and enforcement activities relating to equal employment opportunity among Federal employees and applicants, including discrimination against individuals with disabilities.",
               "tas2Code": "45",
               "tas3Code": "45",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "4500",
               "orgAddresses": [
                  {
                     "addressKey": 100272419,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate": 1208868331000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320019000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "EQUAL EMPLOYMENT OPPORTUNITY COMMISSION",
               "l1OrgKey": 100011800
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100011800"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100011800.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100006809,
               "a11TacCode": 12,
               "agencyName": "Department of Agriculture",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "10",
               "cfdaOmb": 5,
               "createdBy": "",
               "createdDate": 1051488000000,
               "description": "AGRICULTURE, DEPARTMENT OF",
               "fpdsCode": "1200",
               "fpdsOrgId": "1200",
               "cgac": "012",
               "fullParentPath": "100006809",
               "fullParentPathName": "AGRICULTURE_DEPARTMENT_OF",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1249948800000,
               "name": "AGRICULTURE, DEPARTMENT OF",
               "ombAgencyCode": "5",
               "orgCode": "ORG-1078",
               "shortName": "",
               "sourceCfdaPk": "b37449db3a5005ae3d2211754337dde5",
               "sourceParentCfdaPk": "",
               "summary": "Through leadership and partnership with USDA agencies: ensure the provision of information, technical assistance, and training to all USDA customers with emphasis on under-served populations, to assure they have full access to all USDA programs and services. Maintains effective competition and fair trade practices in the marketing of livestock, poultry for the protection of livestock and poultry producers. Administers programs to make food assistance available to people who need it. These programs are operated in cooperation with State and local governments. Participates in a nationwide system of agricultural research program planning and coordination between the States and the Department of Agriculture to encourage and assist in the establishment and maintenance of cooperation within and among the States and between the States and their Federal research partners.  The primary function is to administer the Acts of Congress that authorize Federal appropriations for agricultural research carried on by the State agricultural experiment stations of the 50 States, Puerto Rico, Guam, the Virgin Islands, the District of Columbia, American Samoa, and Micronesia the Northern Marinas, approved schools of forestry, the 1890 land-grant institutions and Tuskegee University, colleges of veterinary medicine, and other eligible institutions.  The Extension activities of the Cooperative State Research, Education, and Extension Service coordinates and provides administrative, technical, and other services to a nationwide Cooperative Extension System, in partnership with State and local governments and the private sector. The primary function of this system is to take the research findings of the Department of Agriculture, the State Land-Grant Colleges and programs administered by the Department of Agriculture, and to develop and deliver informal, out-of-school educational programs.  These programs communicate and demonstrate to people how they can apply research findings to identify and solve farm, home, and community problems.  This work is carried out through extension offices in each State, Puerto Rico, Guam, the Virgin Islands, the District of Columbia, American Samoa, and Micronesia, plus 16, 1890 land-grant universities and Tuskegee University as the State partner.",
               "tas2Code": "12",
               "tas3Code": "12",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1200",
               "orgAddresses": [
                  {
                     "addressKey": 100272444,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208872110000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319876000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "AGRICULTURE DEPARTMENT OF",
               "l1OrgKey": 100006809
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100006809"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100006809.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100007189,
               "a11TacCode": 35,
               "agencyName": "Peace Corps",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaCode": "45",
               "createdBy": "",
               "createdDate": 838684800000,
               "description": "PEACE CORPS",
               "fpdsCode": "1145",
               "fpdsOrgId": "1145",
               "cgac": "011",
               "fullParentPath": "100007189",
               "fullParentPathName": "PEACE_CORPS",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 838684800000,
               "name": "PEACE CORPS",
               "ombAgencyCode": "184",
               "orgCode": "ORG-1075",
               "shortName": "",
               "sourceCfdaPk": "2e190b81b27eafa7c64664721abbc534",
               "sourceParentCfdaPk": "",
               "summary": "The mission of the Peace Corps is to promote world peace and friendship by placing Peace Corps Volunteers (PCVs) in over 70 countries to address and assist with community-based needs in the areas of education, community development, health, business, information technology, agriculture and the environment. From AIDS education to emerging technologies to environmental preservation to new market economies, Peace Corps Volunteers have helped people build better lives for themselves. Their work in villages, towns, and cities around the globe represents a legacy of service that has become a significant part of America’s history and positive image abroad.\n\nThe Peace Corps' mission has three simple goals: 1. Helping the people of interested countries in meeting their need for trained men and women. 2. Helping promote a better understanding of Americans on the part of the peoples served. 3. Helping promote a better understanding of other peoples on the part of Americans.",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1145",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "PEACE CORPS",
               "l1OrgKey": 100007189
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100007189"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100007189.png"
               }
            }
         },
         {
            "org": {
               "orgKey": 100010393,
               "a11TacCode": 14,
               "agencyName": "Department of the Interior",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "15",
               "cfdaOmb": 10,
               "createdBy": "",
               "createdDate": 1087948800000,
               "description": "INTERIOR, DEPARTMENT OF THE",
               "fpdsCode": "1400",
               "fpdsOrgId": "1400",
               "cgac": "014",
               "fullParentPath": "100010393",
               "fullParentPathName": "INTERIOR_DEPARTMENT_OF_THE",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1152057600000,
               "name": "INTERIOR, DEPARTMENT OF THE",
               "ombAgencyCode": "10",
               "orgCode": "ORG-1073",
               "shortName": "",
               "sourceCfdaPk": "b8765976b02cee3a384dec3de1edf2a0",
               "sourceParentCfdaPk": "",
               "summary": "The U.S. Department of the Interior uses sound science to manage and sustain America’s lands, water, wildlife, and energy resources, honors our nation’s responsibilities to tribal nations, and advocates for America’s island communities. As keepers our nation’s legacy, we manage the resources in our care to benefit Americans now and in the future. Under the leadership of Secretary Ken Salazar, our department and its employees are developing and implementing the cutting-edge science and expert management techniques that make this possible.",
               "tas2Code": "14",
               "tas3Code": "14",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1400",
               "orgAddresses": [
                  {
                     "addressKey": 100272446,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208874433000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320538000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "INTERIOR DEPARTMENT OF THE",
               "l1OrgKey": 100010393
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100010393"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100010393.png"
               }
            }
         },
         {
            "org": {
               "orgKey": 100011765,
               "a11TacCode": 49,
               "agencyName": "National Science Foundation",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "47",
               "cfdaOmb": 422,
               "createdBy": "",
               "createdDate": 1101168000000,
               "description": "NATIONAL SCIENCE FOUNDATION",
               "fpdsCode": "4900",
               "fpdsOrgId": "4900",
               "cgac": "049",
               "fullParentPath": "100011765",
               "fullParentPathName": "NATIONAL_SCIENCE_FOUNDATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1254355200000,
               "name": "NATIONAL SCIENCE FOUNDATION",
               "ombAgencyCode": "422",
               "orgCode": "ORG-1030",
               "shortName": "",
               "sourceCfdaPk": "90b5234e309b500214ac246ea440c6fd",
               "sourceParentCfdaPk": "",
               "summary": "Promotes the progress of science and engineering through the support of research and education programs.  Its major emphasis is on high quality, science-driven basic research, the search for improved understanding of the  fundamental laws of nature upon which our future well-being as a Nation depends.  The National Science Foundation also supports applied research in several areas.  Its educational programs are aimed at ensuring    increasing understanding of science and engineering at all educational levels and at training an adequate supply of scientists and engineers to meet our country's needs.",
               "tas3Code": "49",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "4900",
               "orgAddresses": [
                  {
                     "addressKey": 100272435,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "fc9dbe0a7889ec7a0dc22e84a77766b2",
                     "createdDate": 1208971437000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320524000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "NATIONAL SCIENCE FOUNDATION",
               "l1OrgKey": 100011765
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100011765"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100011765.png"
               }
            }
         },
         {
            "org": {
               "orgKey": 100011942,
               "a11TacCode": 70,
               "agencyName": "Department of Homeland Security",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "97",
               "cfdaOmb": 24,
               "createdBy": "",
               "createdDate": 1056067200000,
               "description": "HOMELAND SECURITY, DEPARTMENT OF",
               "fpdsCode": "7000",
               "fpdsOrgId": "7000",
               "cgac": "070",
               "fullParentPath": "100011942",
               "fullParentPathName": "HOMELAND_SECURITY_DEPARTMENT_OF",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1222819200000,
               "name": "HOMELAND SECURITY, DEPARTMENT OF",
               "ombAgencyCode": "24",
               "orgCode": "ORG-1183",
               "shortName": "",
               "sourceCfdaPk": "44bca752df5e7239418a48165240f419",
               "sourceParentCfdaPk": "",
               "summary": "On January 23, 2002, the Department of Homeland Security (DHS) was created through the Homeland Security Act of 2002. The Act provides grants award authority for DHS to award grants, cooperative agreements and other assistance to non-Federal entities in order to assist them with homeland security and disaster preparedness, security, migration and recovery measures. The primary mission of the Department is to prevent terrorist attacks within the Unites States; reduce the vulnerability of the United States to terrorism; minimize damage, and assist in the recovery from terrorist attacks that do occur within the United States; carry out all the functions of entities transferred to the Department, including by acting as focal point regarding natural and manmade crises and emergency planning; ensure that the function of the agencies and subdivisions within the Department that are not related directly to securing the homeland are not diminished or neglected except by a specific explicit Act of Congress; and monitor connection between illegal drug trafficking and terrorism, coordinate efforts to serve such connections, and otherwise contribute to efforts to interdict illegal drug trafficking.",
               "tas2Code": "70",
               "tas3Code": "70",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "7000",
               "orgAddresses": [
                  {
                     "addressKey": 100272406,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate": 1208971816000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319625000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "HOMELAND SECURITY DEPARTMENT OF",
               "l1OrgKey": 100011942
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100011942"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100011942.png"
               }
            }
         },
         {
            "org": {
               "orgKey": 100011955,
               "agencyName": "Department of Justice",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "16",
               "cfdaOmb": 11,
               "createdBy": "",
               "createdDate": 1056585600000,
               "description": "JUSTICE, DEPARTMENT OF",
               "fpdsCode": "1500",
               "fpdsOrgId": "1500",
               "cgac": "015",
               "fullParentPath": "100011955",
               "fullParentPathName": "JUSTICE_DEPARTMENT_OF",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1287619200000,
               "name": "JUSTICE, DEPARTMENT OF",
               "orgCode": "ORG-1181",
               "shortName": "",
               "sourceCfdaPk": "8cd503b18b45ae19892e182525929b1e",
               "sourceParentCfdaPk": "",
               "summary": " Is responsible for enhancing the capacity and capability of State and local jurisdictions to prepare for and respond to incidents of domestic terrorism involving chemical and biological agents, radiological and explosive devices, and other weapons of mass destruction (WMD). It awards grants for equipment and provides training and technical assistance for State and local first responders.  Provides policy coordination and general management authority over the Office of Justice Programs, which includes the Bureau of Justice Assistance, the Bureau of Justice Statistics, the National Institute of Justice, the Office of Juvenile Justice and Delinquency Prevention, and the Office for Victims of Crime. While each OJP Bureau and Office retains independent authority in awarding funds to carry out its programs, together these components function as a single agency whose goal is to promote innovative programs and to foster improvements in the Nation's criminal and juvenile justice systems.",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1500",
               "orgAddresses": [
                  {
                     "addressKey": 100272433,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208874153000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319638000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "JUSTICE DEPARTMENT OF",
               "l1OrgKey": 100011955
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100011955"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100011955.bmp"
               }
            }
         },
         {
            "org": {
               "orgKey": 100011980,
               "a11TacCode": 89,
               "agencyName": "Department of Energy",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "81",
               "cfdaOmb": 19,
               "createdBy": "",
               "createdDate": 1045785600000,
               "description": "ENERGY, DEPARTMENT OF",
               "fpdsCode": "8900",
               "fpdsOrgId": "8900",
               "cgac": "089",
               "fullParentPath": "100011980",
               "fullParentPathName": "ENERGY_DEPARTMENT_OF",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1114387200000,
               "name": "ENERGY, DEPARTMENT OF",
               "ombAgencyCode": "19",
               "orgCode": "ORG-1056",
               "shortName": "ensol",
               "sourceCfdaPk": "f9b483c381bd2a656b43cec368f9438f",
               "sourceParentCfdaPk": "",
               "summary": "DOE is major government enterprise. If included among the Nation's Fortune 500 firms, it would rank in the top 50. Its $16.5 billion appropriation comprises close to 3 percent of total Federal discretionary spending DOE Funds the largest environmental cleanup in history, and research and development that supports the Nation's defense and its energy and economic security. DOE employs over 11,000 Federal employees and about 108,000 contract employees. DOE owns and manages over 50 major installations located on 2.4 million acres in 35 States and is the fourth largest Federal landowner in the United States. DOE is an energy policy, supply, and technology enterprise. It invests in developing a secure, clean, and sustainable energy system. It helps the Nation meet its environmental challenges by administering the largest pollution prevention and efficiency program in the world, with partners from every sector of the economy. It enhances the Nation's energy security by increasing the diversity of energy, and fuel choices and sources; bringing renewable energy sources into the market, strengthening domestic production of oil and gas, maintaining the U.S. nuclear energy option, and increasing the efficiency with which we use energy and generate electricity. The Department also maintains the Strategic Petroleum Reserve and operates five Power Marketing Administrations that sell and distribute over $3 billion of electric power generated at Federal hydroelectric plants. DOE is a national security enterprise. It is a key player in the Administration's furtherance of the Comprehensive Test Ban Treaty and its overall goal of reducing the global danger from nuclear weapons. It ensures the safety and reliability of the U.S. nuclear weapons stockpile without underground testing. At the same time, it manages and safely dismantles excess nuclear materials, and ensures the security of vital departmental nuclear assets. It provides policy and technical assistance to curb global proliferation of weapons of mass destruction, emphasizing U.S. nonproliferation, arms control, and nuclear safety objectives in the states of the former Soviet union and worldwide. Further, it develops and ensures the safety and reliability of nuclear reactor plants to power U.S. Navy warships. DOE is an environmental remediation enterprise. It cleans up the 50-year environmental legacy left at the industrial complexes where nuclear weapons were designed and manufactured. It manages the problems associated with the large quantities of various types of radioactive wastes, surplus nuclear materials, and spent nuclear fuels that remain at the sites of the Nation's nuclear weapons facilities and at nuclear energy research and development sites. In addition, it must address the growing inventory of spent nuclear fuel from commercial nuclear reactors that is awaiting disposal. These wastes must be dealt with responsibly to ensure the safety and health of the public. DOE is a science and technology enterprise. At the center of all we do are our 27 laboratories, our additional scientific user facilities, and our researchers at the Nation's universities. These form the backbone of U.S. scientific leadership by conducting and facilitating breakthrough research in energy sciences and technology, high energy physics, global climate change, genomics, superconducting materials, accelerator technologies, environmental sciences, and super-computing in support of DOE's mission. The laboratories, described as the crown jewels of the Nation's science establishment, and the Department's funding of research at universities have resulted in 66 Nobel prize winners, including three in 1996. The Department is also an investor in the Nation's most precious resource - its youth - by supporting science and mathematics education in our schools through grants, educational programs, and fellowships. DOE is global enterprise. The outcome of our work is the technology that stimulates the private market for the expansion of clean energy to meet national and global energy requirements of almost 500 quadrillion Btu's by the year 2010 - a staggering 36 percent increase over 1995. Overseas energy market needs include coal, nuclear power, oil and gas exploration, energy efficiency, and renewable energy technologies that are available for export now or that will soon be available for the international marketplace. DOE supports the export of U.S. energy services and technologies by assisting the nations in Asia, South America, Eastern Europe, an Africa, and the states of the former Soviet Union in developing private markets for environmentally responsible, sustainable energy. These alliances support U.S. competitiveness in a global economy of growing energy infrastructure requirements and create jobs in the U.S. at all skill levels. ",
               "tas2Code": "89",
               "tas3Code": "89",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "8900",
               "orgAddresses": [
                  {
                     "addressKey": 100272460,
                     "city": "Richland",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208872344000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "aa7462643ffde67be1d13d3ef62be317",
                     "lastModifiedDate": 1236162842000,
                     "state": "WA",
                     "streetAddress": "2345 Stevens Drive",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "ENERGY DEPARTMENT OF",
               "l1OrgKey": 100011980
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100011980"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100011980.gif"
               }
            }
         },
         {
            "org": {
               "orgKey": 100012049,
               "a11TacCode": 16,
               "agencyName": "Department of Labor",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "17",
               "cfdaOmb": 12,
               "createdBy": "",
               "createdDate": 1046217600000,
               "description": "LABOR, DEPARTMENT OF",
               "fpdsCode": "1600",
               "fpdsOrgId": "1600",
               "cgac": "016",
               "fullParentPath": "100012049",
               "fullParentPathName": "LABOR_DEPARTMENT_OF",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1046217600000,
               "name": "LABOR, DEPARTMENT OF",
               "ombAgencyCode": "12",
               "orgCode": "ORG-1071",
               "shortName": "",
               "sourceCfdaPk": "1f3ae9255ccfd6a9b30efbaa76f54ca1",
               "sourceParentCfdaPk": "",
               "summary": "The Office of the Assistant Secretary for Veterans' Employment and Training (VETS) is responsible for the administration, formulating and implementation of policy and procedures affecting veterans as well as veteran's employment and training programs nationwide.  VETS serves as a national leader on Veterans policy and procedure to the Department of Labor (DOL) and other Federal agencies.  VETS fulfills a wide range of obligations prescribed by the  Secretary of Labor regarding the employment and training needs of service-connected disabled veterans, Vietnam-era veterans, and veterans recently separated from military service.  The VETS staff works closely with and provides technical assistance to State Employment Security Agencies and Job Training Partnership Act grant recipients to ensure that veterans are provided the priority services required by law.  They also coordinate with employers, labor unions, veterans' service organizations, and community organizations through planned public information and outreach activities.  Federal contractors are provided management assistance in complying with their veterans affirmative action and reporting obligations.  Also administered by the Assistant Secretary through the Service is the Job Training Partnership Act, Title IV, Part C grant program designed to meet the employment and training needs of service-connected disabled veterans, Vietnam-era veterans, and veterans recently separated from military service.  Job Training Partnership Act grants are awarded and monitored through the Services' national office and field staff.  The Assistant Secretary also administers through the Service the Homeless Veterans Reintegration project grant program to provide employment, training, housing assistance, and supportive services to help homeless veterans reenter mainstream society.  Homeless Veterans Reintegration Project grants are awarded and monitored through the Services' national office and field staff.  Certain other Service staff also administer the veterans Uniformed Services Employment and Reemployment Rights Act program.  They provide assistance to help restore job, seniority, and pension rights to veterans following absences from work for active military service and to protect employment and retention rights of members of the Reserve or National Guard.  Other staff provide assistance to preference eligible veterans to ensure that they are not denied their veterans' preference benefits (preference in Federal government hiring and preference retention in reduction in force (RIF), under the Veterans Employment Opportunities Act (VEOA)). The Office of Disability Employment Policy (ODEP) provides national leadership on disability employment policy to the Department of Labor (DOL) and other Federal agencies.  ODEP was established to bring a heightened, permanent focus to address the significant employment obstacles faced by individuals with disabilities and to ensure coordination among Federal agencies on matters related to or affecting people with disabilities.  ODEP's research provides new knowledge used to develop evidence-based disability employment policies and practices for dissemination to workforce systems and partners.  ODEP works to achieve its mission through collaborating on inter- and intra-agency initiatives, commissions, councils, and workgroups; building partnerships with Federal, state, local, and non-governmental stakeholders; reviewing Federal legislation and policies; designing and conducting research studies; highlighting and promoting policies and practices that increase the employment of people with disabilities; and implementing education and outreach initiatives. ODEP's stakeholders include Federal, state, and local government agencies, private and public employers and their employees, educational and training institutions, individuals with disabilities and their families, and the disability community.",
               "tas2Code": "16",
               "tas3Code": "16",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1600",
               "orgAddresses": [
                  {
                     "addressKey": 100272401,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208874210000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319951000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "LABOR DEPARTMENT OF",
               "l1OrgKey": 100012049
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100012049"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100012049.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100012062,
               "a11TacCode": 19,
               "agencyName": "Department of State",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "19",
               "cfdaOmb": 14,
               "createdBy": "",
               "createdDate": 1052179200000,
               "description": "STATE, DEPARTMENT OF",
               "fpdsCode": "1900",
               "fpdsOrgId": "1900",
               "cgac": "019",
               "fullParentPath": "100012062",
               "fullParentPathName": "STATE_DEPARTMENT_OF",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1266969600000,
               "name": "STATE, DEPARTMENT OF",
               "ombAgencyCode": "14",
               "orgCode": "ORG-1180",
               "shortName": "",
               "sourceCfdaPk": "a40c2ad10c980f89b7cbc7f129032695",
               "sourceParentCfdaPk": "",
               "summary": "Advance freedom for the benefit of the American people and the international community by helping to build and sustain a more democratic, secure, and prosperous world composed of well-governed states that respond to the needs of their people, reduce widespread poverty, and act responsibly within the international system",
               "tas2Code": "19",
               "tas3Code": "19",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1900",
               "orgAddresses": [
                  {
                     "addressKey": 100272442,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208874259000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319651000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "STATE DEPARTMENT OF",
               "l1OrgKey": 100012062
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100012062"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100012062.png"
               }
            }
         },
         {
            "org": {
               "orgKey": 100012189,
               "a11TacCode": 95,
               "agencyName": "Broadcasting Board of Governors",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "90",
               "cfdaOmb": 514,
               "createdBy": "",
               "createdDate": 1053388800000,
               "description": "BROADCASTING BOARD OF GOVERNORS",
               "fpdsCode": "9568",
               "fpdsOrgId": "9568",
               "cgac": "514",
               "fullParentPath": "100012189",
               "fullParentPathName": "BROADCASTING_BOARD_OF_GOVERNORS",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1406764800000,
               "name": "BROADCASTING BOARD OF GOVERNORS",
               "ombAgencyCode": "514",
               "orgCode": "ORG-1148",
               "shortName": "",
               "sourceCfdaPk": "50e78d8b5e1bacce4caf0f645e07e253",
               "sourceParentCfdaPk": "",
               "summary": "The Broadcasting Board of Governors (BBG) encompases all U.S. civilian international broadcasting, including the Voice of America (VOA), Radio Free Europe/Radio Liberty (RFE/RL), Radio Free Asia (RFA), Radio and TV Marti, and the Middle East Broadcasting Networks (MBN) -- Radio Sawa and Alhurra Television.  BBG broadcasters distribute programming in 59 languages to an estimated weekly audience of 171 million people via radia, TV, the Internet and other news media.  The BBG works to serve as an example of a free and professional press, reaching a worldwide audience with new, information, and relevant discussions.\n",
               "tas2Code": "95",
               "tas3Code": "514",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9568",
               "orgAddresses": [
                  {
                     "addressKey": 100272410,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208863988000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319570000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "BROADCASTING BOARD OF GOVERNORS",
               "l1OrgKey": 100012189
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100012189"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100012189.png"
               }
            }
         },
         {
            "org": {
               "orgKey": 100012403,
               "a11TacCode": 28,
               "agencyName": "Social Security Administration",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "96",
               "cfdaOmb": 16,
               "createdBy": "",
               "createdDate": 1100217600000,
               "description": "SOCIAL SECURITY ADMINISTRATION",
               "fpdsCode": "2800",
               "fpdsOrgId": "2800",
               "cgac": "028",
               "fullParentPath": "100012403",
               "fullParentPathName": "SOCIAL_SECURITY_ADMINISTRATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1414713600000,
               "name": "SOCIAL SECURITY ADMINISTRATION",
               "ombAgencyCode": "16",
               "orgCode": "ORG-1166",
               "shortName": "",
               "sourceCfdaPk": "56f9bc7e73f334f8a0f16e3d666433b0",
               "sourceParentCfdaPk": "",
               "summary": "On March 31, 1995, the Social Security Administration (SSA) became an independent agency. SSA administers a national program of contributory social insurance. Employees, employers, and the self-employed pay contributions which are pooled in special trust funds. When earnings cease or are reduced because the worker retires, dies, or becomes disabled, monthly cash benefits are paid to replace part of the earnings the family has lost. Part of the workers contribution goes into a separate hospital insurance trust fund. This fund helps disabled workers, retirees, and their dependents with their hospital bills. They may also elect to receive assistance with medical expenses. This is done by the workers paying a percentage of supplementary medical insurance premiums. The Federal government pays the balance. Together, these two programs are often referred to as \"Medicare.\" Medicare protection is also provided, under certain conditions, to Railroad Retirement beneficiaries based on a disability. The principal functions of SSA include, but are not limited to; research and recommendations oriented to the problems of poverty; health care for the aged, blind, and disabled; long-range planning, design, and development of SSA administrative plans; data processing systems used in establishing and maintaining records essential to its' various programs; statistical measurement and systematic evaluation of its' programs; policy guidance for the administration of the OASDI and SSI programs; and development of programs and materials to assure that Congress, Federal and State agencies, and the general public have an adequate understanding of the protections, rights, and responsibilities under SSA administered programs. In addition, SSA, through a world-wide organization of ten regional offices, six program service centers, and over 1,300 field offices, guides and directs all aspects of the cash benefit program operations of SSA",
               "tas3Code": "28",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "2800",
               "orgAddresses": [
                  {
                     "addressKey": 100272413,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "fc9dbe0a7889ec7a0dc22e84a77766b2",
                     "createdDate": 1208886594000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320808000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "SOCIAL SECURITY ADMINISTRATION",
               "l1OrgKey": 100012403
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100012403"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100012403.gif"
               }
            }
         },
         {
            "org": {
               "orgKey": 100013311,
               "a11TacCode": 20,
               "agencyName": "Department of the Treasury",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "21",
               "cfdaOmb": 15,
               "createdBy": "",
               "createdDate": 1064880000000,
               "description": "TREASURY, DEPARTMENT OF THE",
               "fpdsCode": "2000",
               "fpdsOrgId": "2000",
               "cgac": "020",
               "fullParentPath": "100013311",
               "fullParentPathName": "TREASURY_DEPARTMENT_OF_THE",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1143676800000,
               "name": "TREASURY, DEPARTMENT OF THE",
               "ombAgencyCode": "15",
               "orgCode": "ORG-1179",
               "shortName": "",
               "sourceCfdaPk": "72a3b4ab05a63bed3965d31873e7868c",
               "sourceParentCfdaPk": "",
               "summary": "The Department of the Treasury's mission highlights its role as the steward of U.S. economic and financial systems, and as an influential participant in the global economy. The Treasury Department is the executive agency responsible for promoting economic prosperity and ensuring the financial security of the United States. The Department is responsible for a wide range of activities such as advising the President on economic and financial issues, encouraging sustainable economic growth, and fostering improved governance in financial institutions. The Department of the Treasury operates and maintains systems that are critical to the nation's financial infrastructure, such as the production of coin and currency, the disbursement of payments to the American public, revenue collection, and the borrowing of funds necessary to run the federal government. The Department works with other federal agencies, foreign governments, and international financial institutions to encourage global economic growth, raise standards of living, and to the extent possible, predict and prevent economic and financial crises. The Treasury Department also performs a critical and far-reaching role in enhancing national security by implementing economic sanctions against foreign threats to the U.S., identifying and targeting the financial support networks of national security threats, and improving the safeguards of our financial systems. \n\n",
               "tas2Code": "20",
               "tas3Code": "20",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "2000",
               "orgAddresses": [
                  {
                     "addressKey": 100272421,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208874601000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319964000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "TREASURY DEPARTMENT OF THE",
               "l1OrgKey": 100013311
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100013311"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100013311.bmp"
               }
            }
         },
         {
            "org": {
               "orgKey": 100037917,
               "a11TacCode": 73,
               "agencyName": "Small Business Administration",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "59",
               "cfdaOmb": 28,
               "createdBy": "",
               "createdDate": 838684800000,
               "description": "SMALL BUSINESS ADMINISTRATION",
               "fpdsCode": "7300",
               "fpdsOrgId": "7300",
               "cgac": "073",
               "fullParentPath": "100037917",
               "fullParentPathName": "SMALL_BUSINESS_ADMINISTRATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1143763200000,
               "name": "SMALL BUSINESS ADMINISTRATION",
               "ombAgencyCode": "28",
               "orgCode": "ORG-1065",
               "shortName": "",
               "sourceCfdaPk": "2452a817ef67bc6a1609fffe201f1ed9",
               "sourceParentCfdaPk": "",
               "summary": "Aids, counsels, assists, and protects the interests of small business; ensures that small business concerns receive a fair proportion of Government purchases, contracts, and subcontracts, as well as of the sales of Government property; makes loans to small business concerns, State and local development companies, and the victims of floods or other catastrophes, or certain types of economic injury; and licenses, regulates, and makes loans to small business investment companies.",
               "tas3Code": "73",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "7300",
               "orgAddresses": [
                  {
                     "addressKey": 100272402,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "fc9dbe0a7889ec7a0dc22e84a77766b2",
                     "createdDate": 1208968988000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320842000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "SMALL BUSINESS ADMINISTRATION",
               "l1OrgKey": 100037917
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100037917"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100037917.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100039806,
               "a11TacCode": 50,
               "agencyName": "Securities and Exchange Commission",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "58",
               "cfdaOmb": 449,
               "createdBy": "",
               "createdDate": 1069286400000,
               "description": "SECURITIES AND EXCHANGE COMMISSION",
               "fpdsCode": "5000",
               "fpdsOrgId": "5000",
               "cgac": "050",
               "fullParentPath": "100039806",
               "fullParentPathName": "SECURITIES_AND_EXCHANGE_COMMISSION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1143676800000,
               "name": "SECURITIES AND EXCHANGE COMMISSION",
               "ombAgencyCode": "449",
               "orgCode": "ORG-1031",
               "shortName": "",
               "sourceCfdaPk": "09419ab03efaecd9a9e84a96afb4f853",
               "sourceParentCfdaPk": "",
               "summary": "Administers Federal securities laws that seek to provide for investors; to ensure that securities markets are fair and honest; and, when necessary, to provide the means to enforce securities laws through sanctions.",
               "tas3Code": "50",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "5000",
               "orgAddresses": [
                  {
                     "addressKey": 100272392,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "fc9dbe0a7889ec7a0dc22e84a77766b2",
                     "createdDate": 1208969741000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320856000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "SECURITIES AND EXCHANGE COMMISSION",
               "l1OrgKey": 100039806
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100039806"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100039806.png"
               }
            }
         },
         {
            "org": {
               "orgKey": 100041854,
               "a11TacCode": 11,
               "agencyName": "Executive Office of the President",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "95",
               "cfdaOmb": 0,
               "createdBy": "",
               "createdDate": 1069286400000,
               "description": "EXECUTIVE OFFICE OF THE PRESIDENT",
               "fpdsCode": "1100",
               "fpdsOrgId": "1100",
               "cgac": "011",
               "fullParentPath": "100041854",
               "fullParentPathName": "EXECUTIVE_OFFICE_OF_THE_PRESIDENT",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1143676800000,
               "name": "EXECUTIVE OFFICE OF THE PRESIDENT",
               "ombAgencyCode": "100",
               "orgCode": "ORG-1074",
               "shortName": "",
               "sourceCfdaPk": "c46481ec3934c27c6cd1efdedb30e0d5",
               "sourceParentCfdaPk": "",
               "tas3Code": "11",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1100",
               "orgAddresses": [
                  {
                     "addressKey": 100272448,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate": 1208875809000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319976000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "EXECUTIVE OFFICE OF THE PRESIDENT",
               "l1OrgKey": 100041854
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100041854"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100041854.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100076256,
               "a11TacCode": 33,
               "agencyName": "Smithsonian Institution",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "85",
               "cfdaOmb": 452,
               "createdBy": "",
               "createdDate": 1138665600000,
               "description": "SMITHSONIAN INSTITUTION",
               "fpdsCode": "3300",
               "fpdsOrgId": "3300",
               "cgac": "033",
               "fullParentPath": "100076256",
               "fullParentPathName": "SMITHSONIAN_INSTITUTION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1164672000000,
               "name": "SMITHSONIAN INSTITUTION",
               "ombAgencyCode": "452",
               "orgCode": "ORG-1170",
               "shortName": "",
               "sourceCfdaPk": "87a464ea45f7aaa0d4e4cb9641cc49f8",
               "sourceParentCfdaPk": "",
               "summary": "The Smithsonian Institution is an independent trust instrumentality of the United States which comprises the world's largest museum and research complex.  The Smithsonian includes 19 museums and galleries, the National Zoo, and research facilities in several States and the Republic of Panama.  It holds more than 136 million artifacts and specimens in its trust for the American people.  The Smithsonian is dedicated to public education, national service, and scholarship in the arts, science, history, and culture.The Smithsonian Institution was created by an act of Congress on August 10, 1846 (20 U.S.C. 41 et seq.), to carry out the terms of the will of British scientist James Smithson (1765,  1829), who in 1826 had bequeathed his entire estate to the United States to found at Washington, under the name of the Smithsonian Institution, an establishment for increase and diffusion of knowledge among men. On July 1, 1836, Congress accepted the legacy and pledged the faith of the United States to the charitable trust. In September 1838, Smithson's legacy, which amounted to more than 100,000 gold sovereigns, was delivered to the mint at Philadelphia, Congress vested responsibility for administering the trust in the Secretary of the Smithsonian and the Smithsonian Board of Regents, composed of the Chief Justice, the Vice President, three Members of the Senate, three Members of the House of Representatives, and nine citizen members appointed by joint resolution of Congress.\n",
               "tas3Code": "33",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "3300",
               "orgAddresses": [
                  {
                     "addressKey": 100272432,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "fc9dbe0a7889ec7a0dc22e84a77766b2",
                     "createdDate": 1208886693000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320796000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "SMITHSONIAN INSTITUTION",
               "l1OrgKey": 100076256
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100076256"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100076256.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100076293,
               "a11TacCode": 95,
               "agencyName": "Millennium Challenge Corporation",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaCode": "85",
               "createdBy": "",
               "createdDate": 1128297600000,
               "description": "MILLENIUM CHALLENGE CORPORATION",
               "fpdsCode": "9543",
               "fpdsOrgId": "9543",
               "cgac": "524",
               "fullParentPath": "100076293",
               "fullParentPathName": "MILLENIUM_CHALLENGE_CORPORATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1134345600000,
               "name": "MILLENIUM CHALLENGE CORPORATION",
               "ombAgencyCode": "184",
               "orgCode": "ORG-1188",
               "shortName": "",
               "sourceCfdaPk": "fbbe1a8de95a1b0154a012d5d5e75675",
               "sourceParentCfdaPk": "",
               "summary": "The Millennium Challence Corporation (MCC) forms partnerships with some of the world’s poorest countries, but only those committed to: good governance, economic freedom, and investments in their citizens.  MCC provides these well-performing countries with large-scale grants to fund country-led solutions for reducing poverty through sustainable economic growth.  MCC grants complement other U.S. and international development programs.\n",
               "tas2Code": "95",
               "tas3Code": "524",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9543",
               "orgAddresses": [
                  {
                     "addressKey": 100272462,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate": 1208950250000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320411000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "MILLENIUM CHALLENGE CORPORATION",
               "l1OrgKey": 100076293
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100076293"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100076293.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100076366,
               "a11TacCode": 27,
               "agencyName": "Federal Communications Commission",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "32",
               "cfdaOmb": 356,
               "createdBy": "",
               "createdDate": 1086220800000,
               "description": "FEDERAL COMMUNICATIONS COMMISSION",
               "fpdsCode": "2700",
               "fpdsOrgId": "2700",
               "cgac": "027",
               "fullParentPath": "100076366",
               "fullParentPathName": "FEDERAL_COMMUNICATIONS_COMMISSION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1143676800000,
               "name": "FEDERAL COMMUNICATIONS COMMISSION",
               "ombAgencyCode": "356",
               "orgCode": "ORG-1165",
               "shortName": "",
               "sourceCfdaPk": "461015d6812a0438ee174dcfbc8458e5",
               "sourceParentCfdaPk": "",
               "summary": "Regulates interstate and foreign communications by radio, television, wire, satellite, and cable.  It is responsible for the orderly development and operation of broadcast services and the provision of rapid, efficient nationwide and worldwide telephone and telegraph services at reasonable rates.  Its responsibilities also include the use of communications for promoting safety of life and property and for strengthening the national defense.",
               "tas3Code": "27",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "2700",
               "orgAddresses": [
                  {
                     "addressKey": 100272408,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate": 1208876463000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320106000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "FEDERAL COMMUNICATIONS COMMISSION",
               "l1OrgKey": 100076366
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100076366"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100076366.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100076449,
               "a11TacCode": 88,
               "agencyName": "National Archives and Records Administration",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 15,
               "cfdaCode": "89",
               "cfdaOmb": 5,
               "createdBy": "",
               "createdDate": 1123286400000,
               "description": "NATIONAL ARCHIVES AND RECORDS ADMINISTRATION",
               "fpdsCode": "8800",
               "fpdsOrgId": "8800",
               "cgac": "088",
               "fullParentPath": "100076449",
               "fullParentPathName": "NATIONAL_ARCHIVES_AND_RECORDS_ADMINISTRATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1310515200000,
               "name": "NATIONAL ARCHIVES AND RECORDS ADMINISTRATION",
               "ombAgencyCode": "393",
               "orgCode": "ORG-1055",
               "shortName": "",
               "sourceCfdaPk": "154d394c14ded215084894142f9989fb",
               "sourceParentCfdaPk": "",
               "summary": "Establishes policies and procedures for managing the records of the United States Government.  NARA assists Federal agencies in adequately documenting their activities, administering their records management programs, scheduling their records, and retiring their noncurrent records to Federal Records Centers.  The mission of the National Archives and Records Administration is to ensure, for the Citizen and the public servant, for the President and the Congress and the Courts, ready access to essential evidence.  Managing the Presidential Libraries system, assisting the National Historical Publications and Records Commission in its grant program for State and local records and edited publications of prominent Americans, and publishing the laws, regulations, Presidential, and other public documents are also key functions of the National Archives and Records Administration.",
               "tas3Code": "88",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "8800",
               "orgAddresses": [
                  {
                     "addressKey": 100272396,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate": 1208950626000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320423000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "NATIONAL ARCHIVES AND RECORDS ADMINISTRATION",
               "l1OrgKey": 100076449
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100076449"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100076449.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100081847,
               "a11TacCode": 68,
               "agencyName": "Environmental Protection Agency",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "66",
               "cfdaOmb": 20,
               "createdBy": "",
               "createdDate": 1155340800000,
               "description": "ENVIRONMENTAL PROTECTION AGENCY",
               "fpdsCode": "6800",
               "fpdsOrgId": "6800",
               "cgac": "068",
               "fullParentPath": "100081847",
               "fullParentPathName": "ENVIRONMENTAL_PROTECTION_AGENCY",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1165536000000,
               "name": "ENVIRONMENTAL PROTECTION AGENCY",
               "ombAgencyCode": "20",
               "orgCode": "ORG-1015",
               "shortName": "EPA",
               "sourceCfdaPk": "1135d16672c45b40dc20729acdb1e903",
               "sourceParentCfdaPk": "",
               "summary": "The mission of EPA is to protect human health and the environment. EPA's purpose is to ensure that:  all Americans are protected from significant risks to human health and the environment where they live, learn and work; national efforts to reduce environmental risk are based on the best available scientific information; federal laws protecting human health and the environment are enforced fairly and effectively; environmental protection is an integral consideration in U.S. policies concerning natural resources, human health, economic growth, energy, transportation, agriculture, industry, and international trade, and these factors are similarly considered in establishing environmental policy; all parts of society -- communities, individuals, businesses, and state, local and tribal governments -- have access to accurate information sufficient to effectively participate in managing human health and environmental risks; environmental protection contributes to making our communities and ecosystems diverse, sustainable and economically productive; and the United States plays a leadership role in working with other nations to protect the global environment. ",
               "tas2Code": "68",
               "tas3Code": "68",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "6800",
               "orgAddresses": [
                  {
                     "addressKey": 100272394,
                     "city": "Washington",
                     "countryCode": "US",
                     "createdBy": "c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate": 1208867864000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "c9a512cfc3e3bc2b8afadb4aeee65080",
                     "lastModifiedDate": 1444317055000,
                     "state": "DC",
                     "streetAddress": "1200 Pennsylvania Ave, NW   ",
                     "type": "M",
                     "zipcode": "20460"
                  }
               ],
               "hierarchy": [],
               "l1Name": "ENVIRONMENTAL PROTECTION AGENCY",
               "l1OrgKey": 100081847
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100081847"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100081847.gif"
               }
            }
         },
         {
            "org": {
               "orgKey": 100081901,
               "a11TacCode": 71,
               "agencyName": "Overseas Private Investment Corporation",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 20,
               "cfdaCode": "70",
               "cfdaOmb": 184,
               "createdBy": "",
               "createdDate": 1153526400000,
               "description": "OVERSEAS PRIVATE INVESTMENT CORPORATION",
               "fpdsCode": "7100",
               "fpdsOrgId": "7100",
               "cgac": "071",
               "fullParentPath": "100081901",
               "fullParentPathName": "OVERSEAS_PRIVATE_INVESTMENT_CORPORATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1453852800000,
               "name": "OVERSEAS PRIVATE INVESTMENT CORPORATION",
               "ombAgencyCode": "184",
               "orgCode": "ORG-1064",
               "shortName": "",
               "sourceCfdaPk": "8086b00a815a8bcfcc019b3bdf4f395d",
               "sourceParentCfdaPk": "",
               "summary": "Offers United States investors assistance in finding investment opportunities, insurance, and loans.",
               "tas2Code": "71",
               "tas3Code": "71",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "7100",
               "orgAddresses": [
                  {
                     "addressKey": 100272429,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "fc9dbe0a7889ec7a0dc22e84a77766b2",
                     "createdDate": 1208970548000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320636000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "OVERSEAS PRIVATE INVESTMENT CORPORATION",
               "l1OrgKey": 100081901
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100081901"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100081901.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100090284,
               "a11TacCode": 12,
               "agencyName": "Pension Benefit Guaranty Corporation",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 12,
               "cfdaCode": "86",
               "cfdaOmb": 12,
               "createdBy": "",
               "createdDate": 1179964800000,
               "description": "PENSION BENEFIT GUARANTY CORPORATION",
               "fpdsCode": "1665",
               "fpdsOrgId": "1665",
               "cgac": "016",
               "fullParentPath": "100090284",
               "fullParentPathName": "PENSION_BENEFIT_GUARANTY_CORPORATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1442966400000,
               "name": "PENSION BENEFIT GUARANTY CORPORATION",
               "orgCode": "ORG-4280",
               "shortName": "",
               "sourceCfdaPk": "fa73c1a942a0402ad627e42e89e71771",
               "sourceParentCfdaPk": "",
               "summary": "The Pension Benefit Guaranty Corporation guarantees payment of nonforfeitable pension benefits in covered.",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "1665",
               "orgAddresses": [
                  {
                     "addressKey": 100272461,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "fc9dbe0a7889ec7a0dc22e84a77766b2",
                     "createdDate": 1208970282000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320697000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "PENSION BENEFIT GUARANTY CORPORATION",
               "l1OrgKey": 100090284
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100090284"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100090284.gif"
               }
            }
         },
         {
            "org": {
               "orgKey": 100094131,
               "a11TacCode": 3,
               "agencyName": "Library of Congress",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 25,
               "cfdaCode": "42",
               "cfdaOmb": 1,
               "createdBy": "",
               "createdDate": 1100649600000,
               "description": "LIBRARY OF CONGRESS",
               "fpdsCode": "0300",
               "fpdsOrgId": "0300",
               "cgac": "003",
               "fullParentPath": "100094131",
               "fullParentPathName": "LIBRARY_OF_CONGRESS",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1160611200000,
               "name": "LIBRARY OF CONGRESS",
               "ombAgencyCode": "1",
               "orgCode": "ORG-1082",
               "shortName": "",
               "sourceCfdaPk": "92f188b7f9d2e11d88ec5b2263879e17",
               "sourceParentCfdaPk": "",
               "summary": "Under the organic law, the Library's first responsibility is service to Congress. ",
               "tas3Code": "3",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "0300",
               "orgAddresses": [
                  {
                     "addressKey": 100272436,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1209125400000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320673000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "LIBRARY OF CONGRESS",
               "l1OrgKey": 100094131
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100094131"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100094131.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100114303,
               "agencyName": "National Gallery of Art",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "68",
               "cfdaOmb": 452,
               "createdBy": "",
               "createdDate": 1069286400000,
               "description": "NATIONAL GALLERY OF ART",
               "fpdsCode": "3355",
               "fpdsOrgId": "3355",
               "cgac": "033",
               "fullParentPath": "100114303",
               "fullParentPathName": "NATIONAL_GALLERY_OF_ART",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1143676800000,
               "name": "NATIONAL GALLERY OF ART",
               "orgCode": "ORG-1171",
               "shortName": "",
               "sourceCfdaPk": "15a847a4e196701221c4275eb20e08b3",
               "sourceParentCfdaPk": "",
               "summary": " The National Gallery's collections embrace every major school of western European art.",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "3355",
               "orgAddresses": [
                  {
                     "addressKey": 100272397,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate": 1208970123000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320512000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "NATIONAL GALLERY OF ART",
               "l1OrgKey": 100114303
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100114303"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100114303.gif"
               }
            }
         },
         {
            "org": {
               "orgKey": 100136900,
               "a11TacCode": 93,
               "agencyName": "Federal Mediation and Conciliation Service",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "34",
               "cfdaOmb": 367,
               "createdBy": "",
               "createdDate": 838684800000,
               "description": "FEDERAL MEDIATION AND CONCILIATION SERVICE",
               "fpdsCode": "9300",
               "fpdsOrgId": "9300",
               "cgac": "093",
               "fullParentPath": "100136900",
               "fullParentPathName": "FEDERAL_MEDIATION_AND_CONCILIATION_SERVICE",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 838684800000,
               "name": "FEDERAL MEDIATION AND CONCILIATION SERVICE",
               "ombAgencyCode": "367",
               "orgCode": "ORG-1048",
               "shortName": "",
               "sourceCfdaPk": "4b66daf844ebc45473e2ffa364e8b19f",
               "sourceParentCfdaPk": "",
               "summary": "Assists labor and management in resolving disputes.",
               "tas3Code": "93",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9300",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "FEDERAL MEDIATION AND CONCILIATION SERVICE",
               "l1OrgKey": 100136900
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100136900"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100136900.png"
               }
            }
         },
         {
            "org": {
               "orgKey": 100137672,
               "a11TacCode": 31,
               "agencyName": "Nuclear Regulatory Commission",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "77",
               "cfdaOmb": 429,
               "createdBy": "",
               "createdDate": 951782400000,
               "description": "NUCLEAR REGULATORY COMMISSION",
               "fpdsCode": "3100",
               "fpdsOrgId": "3100",
               "cgac": "031",
               "fullParentPath": "100137672",
               "fullParentPathName": "NUCLEAR_REGULATORY_COMMISSION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1353283200000,
               "name": "NUCLEAR REGULATORY COMMISSION",
               "ombAgencyCode": "429",
               "orgCode": "ORG-1169",
               "shortName": "",
               "sourceCfdaPk": "d39c920bd010534518235c47405f6618",
               "sourceParentCfdaPk": "",
               "summary": "Licenses and regulates the civilian uses of nuclear energy to protect the public health.",
               "tas2Code": "31",
               "tas3Code": "31",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "3100",
               "orgAddresses": [
                  {
                     "addressKey": 100272451,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "fc9dbe0a7889ec7a0dc22e84a77766b2",
                     "createdDate": 1209058371000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320587000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "NUCLEAR REGULATORY COMMISSION",
               "l1OrgKey": 100137672
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100137672"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100137672.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100140118,
               "a11TacCode": 83,
               "agencyName": "Export - Import Bank of the United States",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "31",
               "cfdaOmb": 351,
               "createdBy": "",
               "createdDate": 1371600000000,
               "description": "EXPORT-IMPORT BANK OF THE U.S.",
               "fpdsCode": "8300",
               "fpdsOrgId": "8300",
               "cgac": "083",
               "fullParentPath": "100140118",
               "fullParentPathName": "EXPORTIMPORT_BANK_OF_THE_US",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1371600000000,
               "name": "EXPORT-IMPORT BANK OF THE U.S.",
               "ombAgencyCode": "351",
               "orgCode": "ORG-1061",
               "shortName": "",
               "sourceCfdaPk": "132c33b6bffe278df841b8d734b6cdf4",
               "sourceParentCfdaPk": "",
               "summary": "The Export-Import Bank of the United States (Ex-Im Bank) is the official export credit agency of the United States.",
               "tas3Code": "83",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "8300",
               "orgAddresses": [
                  {
                     "addressKey": 100272395,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208875749000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319990000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "EXPORTIMPORT BANK OF THE US",
               "l1OrgKey": 100140118
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100140118"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100140118.png"
               }
            }
         },
         {
            "org": {
               "orgKey": 100148640,
               "a11TacCode": 72,
               "agencyName": "Agency for International Development",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 15,
               "cfdaCode": "98",
               "cfdaOmb": 184,
               "createdBy": "",
               "createdDate": 1121904000000,
               "description": "AGENCY FOR INTERNATIONAL DEVELOPMENT",
               "fpdsCode": "7200",
               "fpdsOrgId": "7200",
               "cgac": "072",
               "fullParentPath": "100148640",
               "fullParentPathName": "AGENCY_FOR_INTERNATIONAL_DEVELOPMENT",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1143763200000,
               "name": "AGENCY FOR INTERNATIONAL DEVELOPMENT",
               "ombAgencyCode": "184",
               "orgCode": "ORG-1192",
               "shortName": "",
               "sourceCfdaPk": "092fed1473b306eb0b0f6be7ba456f80",
               "sourceParentCfdaPk": "",
               "summary": "To promote transformational development in less-developed and selected middle-income countries.",
               "tas2Code": "72",
               "tas3Code": "72",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "7200",
               "orgAddresses": [
                  {
                     "addressKey": 100272391,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208860445000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319487000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "AGENCY FOR INTERNATIONAL DEVELOPMENT",
               "l1OrgKey": 100148640
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100148640"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100148640.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100167226,
               "a11TacCode": 29,
               "agencyName": "Federal Trade Commission",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "36",
               "cfdaOmb": 370,
               "createdBy": "",
               "createdDate": 838684800000,
               "description": "FEDERAL TRADE COMMISSION",
               "fpdsCode": "2900",
               "fpdsOrgId": "2900",
               "cgac": "029",
               "fullParentPath": "100167226",
               "fullParentPathName": "FEDERAL_TRADE_COMMISSION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 838684800000,
               "name": "FEDERAL TRADE COMMISSION",
               "ombAgencyCode": "370",
               "orgCode": "ORG-1167",
               "shortName": "",
               "sourceCfdaPk": "0584f28593cfc43fa53f4528553fe4a7",
               "sourceParentCfdaPk": "",
               "summary": " Maintains competitive enterprise as the keystone of the American economic system.",
               "tas3Code": "29",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "2900",
               "orgAddresses": [
                  {
                     "addressKey": 100272389,
                     "city": "Washington,",
                     "countryCode": "US",
                     "createdBy": "c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate": 1208881891000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320157000,
                     "state": "DC",
                     "streetAddress": "600 Pennyslvania Avenue NW RM 779 ",
                     "type": "M",
                     "zipcode": "20580"
                  }
               ],
               "hierarchy": [],
               "l1Name": "FEDERAL TRADE COMMISSION",
               "l1OrgKey": 100167226
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100167226"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100167226.png"
               }
            }
         },
         {
            "org": {
               "orgKey": 100188615,
               "a11TacCode": 63,
               "agencyName": "National Labor Relations Board",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "46",
               "cfdaOmb": 420,
               "createdBy": "",
               "createdDate": 1460419200000,
               "description": "NATIONAL LABOR RELATIONS BOARD",
               "fpdsCode": "6300",
               "fpdsOrgId": "6300",
               "cgac": "420",
               "fullParentPath": "100188615",
               "fullParentPathName": "NATIONAL_LABOR_RELATIONS_BOARD",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1460505600000,
               "name": "NATIONAL LABOR RELATIONS BOARD",
               "ombAgencyCode": "420",
               "orgCode": "ORG-1011",
               "shortName": "",
               "sourceCfdaPk": "4552ed02aecd440f0cb6469f7d1f0e60",
               "sourceParentCfdaPk": "",
               "summary": "Administers the Nation's principal law",
               "tas3Code": "420",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "6300",
               "orgAddresses": [
                  {
                     "addressKey": 100272407,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1209123426000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320486000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "NATIONAL LABOR RELATIONS BOARD",
               "l1OrgKey": 100188615
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100188615"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100188615.png"
               }
            }
         },
         {
            "org": {
               "orgKey": 100188643,
               "a11TacCode": 60,
               "agencyName": "Railroad Retirement Board",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "cfdaBur": 0,
               "cfdaCode": "57",
               "cfdaOmb": 446,
               "createdBy": "",
               "createdDate": 1460505600000,
               "description": "RAILROAD RETIREMENT BOARD",
               "fpdsCode": "6000",
               "fpdsOrgId": "6000",
               "cgac": "060",
               "fullParentPath": "100188643",
               "fullParentPathName": "RAILROAD_RETIREMENT_BOARD",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1460505600000,
               "name": "RAILROAD RETIREMENT BOARD",
               "ombAgencyCode": "446",
               "orgCode": "ORG-1008",
               "shortName": "",
               "sourceCfdaPk": "8313c11ac6d9700079f0d6db0eb96aa9",
               "sourceParentCfdaPk": "",
               "summary": "Administers comprehensive retirement-survivor affect railroad retirement beneficiaries.",
               "tas3Code": "60",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "6000",
               "orgAddresses": [
                  {
                     "addressKey": 100272431,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1209124261000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320721000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "RAILROAD RETIREMENT BOARD",
               "l1OrgKey": 100188643
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100188643"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100188643.gif"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500159,
               "a11TacCode": 4,
               "agencyName": "Government Publishing Office",
               "cfdaBur": 30,
               "cfdaCode": "40",
               "cfdaOmb": 1,
               "createdBy": "",
               "fpdsCode": "",
               "cgac": "001",
               "fullParentPath": "100500159",
               "fullParentPathName": "GOVERNMENT_PRINTING_OFFICE",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "lastModifiedBy": "",
               "name": "GOVERNMENT PRINTING OFFICE",
               "ombAgencyCode": "1",
               "shortName": "",
               "sourceCfdaPk": "f3d12ca043d5d39da73a44255b9d0864",
               "sourceParentCfdaPk": "",
               "summary": "Executes orders for printing and binding placed by Congress throughout the country.",
               "tas2Code": "4",
               "tas3Code": "4",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "",
               "orgAddresses": [
                  {
                     "addressKey": 100272458,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "fc9dbe0a7889ec7a0dc22e84a77766b2",
                     "createdDate": 1209058204000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320189000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "GOVERNMENT PRINTING OFFICE",
               "l1OrgKey": 100500159
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500159"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100500159.png"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500163,
               "a11TacCode": 95,
               "agencyName": "Morris K. Udall Foundation",
               "cfdaBur": 0,
               "cfdaCode": "85",
               "cfdaOmb": 487,
               "createdBy": "",
               "fpdsCode": "",
               "fullParentPath": "100500163",
               "fullParentPathName": "MORRIS_K_UDALL_FOUNDATION",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "lastModifiedBy": "",
               "name": "MORRIS K. UDALL FOUNDATION",
               "ombAgencyCode": "487",
               "shortName": "",
               "sourceCfdaPk": "9a85c4fec20ba61f93a75c3d9e2ab8ed",
               "sourceParentCfdaPk": "",
               "summary": "Scholarships, internships, and fellowships are financed by a permanent trust fund endowment.  Programs are designed to develop increased opportunities for Americans to prepare for and pursue careers related to the environment and for Native Americans and Alaska Natives to pursue careers in health care and tribal public policy.",
               "tas2Code": "95",
               "tas3Code": "487",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "",
               "orgAddresses": [
                  {
                     "addressKey": 100272439,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate": 1208950338000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320460000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "MORRIS K UDALL FOUNDATION",
               "l1OrgKey": 100500163
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500163"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100500163.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500208,
               "agencyName": "National Council on Disability",
               "cfdaCode": "92",
               "createdBy": "",
               "createdDate": 1246980680000,
               "fullParentPath": "100500208",
               "fullParentPathName": "National_Council_on_Disability",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1246980680000,
               "name": "National Council on Disability",
               "shortName": "",
               "sourceCfdaPk": "0cd0a1d68680290a06080951c5d30f66",
               "sourceParentCfdaPk": "",
               "summary": "The Council is responsible for reviewing all laws, programs, and policies of the Federal Government affecting disabled individuals, and establishing general policies for the National Institute on Disability and Rehabilitation Research and the President's Committee on Employment of People with Disabilities.  The Council also makes recommendations on issues affecting people with disabilities to the President, the Congress, the Rehabilitation Services Administration Commissioner, the National Institute on Disability, the President's Committee on Employment of People with Disabilities, the Rehabilitation Research Director, and other Federal Departments and agencies, as may be appropriate.  The National Council is the only Federal agency with the responsibility of developing policy.",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "National Council on Disability",
               "l1OrgKey": 100500208
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500208"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100500208.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500218,
               "agencyName": "Institute of Museum and Library Services",
               "cfdaBur": 0,
               "cfdaCode": "45",
               "cfdaOmb": 474,
               "createdBy": "",
               "createdDate": 1205416381000,
               "fullParentPath": "100500218",
               "fullParentPathName": "Institute_of_Museum_and_Library_Services",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1444320240000,
               "name": "Institute of Museum and Library Services",
               "shortName": "",
               "sourceCfdaPk": "19c8643216ba4bf3e5ec08015b24979d",
               "sourceParentCfdaPk": "",
               "summary": " IMLS Vision - A democratic society where communities and individuals thrive with broad public access to knowledge, cultural heritage, and lifelong learning.\nIMLS Mission - The mission of IMLS is to inspire libraries and museums to advance innovation, lifelong learning, and cultural and civic engagement. We provide leadership through research, policy development, and grant making.\nIMLS Strategic Goals - 1.IMLS places the learner at the center and supports engaging experiences in libraries and museums that prepare people to be full participants in their local communities and our global society. 2. IMLS promotes museums and libraries as strong community anchors that enhance civic engagement, cultural opportunities, and economic vitality. 3. IMLS supports exemplary stewardship of museum and library collections and promotes the use of technology to facilitate discovery of knowledge and cultural heritage. 4. IMLS advises the President and Congress on plans, policies, and activities to sustain and increase public access to information and ideas. 5. IMLS achieves excellence in public management and performs as a model organization through strategic alignment of IMLS resources and prioritization of programmatic activities, maximizing value for the American public.\nFast Facts - There are 17,500 museums and 123,000 libraries in the U.S.. IMLS supports the full range of libraries, including public, academic, research, special and tribal, and the full range of museums including art, history, science and technology, children’s museums, historical societies, tribal museums, planetariums, botanic gardens and zoos. 169 million people in the U.S. over the age of 14 (69% of the population) are library users. 148 million people in the U.S over the age of 18 visit a museum annually.\n",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [
                  {
                     "addressKey": 100272398,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "036016aa5b797617c6023036f5c2df78",
                     "createdDate": 1444316481000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320240000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "Institute of Museum and Library Services",
               "l1OrgKey": 100500218
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500218"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100500218.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500269,
               "agencyName": "Consumer Product Safety Commission",
               "cfdaCode": "87",
               "createdBy": "",
               "createdDate": 1246980683000,
               "fullParentPath": "100500269",
               "fullParentPathName": "Consumer_Product_Safety_Commission",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1412686515000,
               "name": "Consumer Product Safety Commission",
               "shortName": "",
               "sourceCfdaPk": "7b204cb554667f420922a6e353052809",
               "sourceParentCfdaPk": "",
               "summary": "The U.S. Consumer Product Safety Commission (CPSC) is an independent federal regulatory agency, created in 1972 by the Consumer Product Safety Act (CPSA). In addition to the CPSA, as amended by the Consumer Product Safety Improvement Act of 2008 (CPSIA), and Public Law 112–28, the CPSC also administers other laws, including the Federal Hazardous Substances Act, the Flammable Fabrics Act, the Child Safety Protection Act, the Poison Prevention Packaging Act, the Refrigerator Safety Act, the Virginia Graeme Baker (VGB) Pool and Spa Safety Act, and the Children's Gasoline Burn Prevention Act.\n   The CPSC has jurisdiction over thousands of types of consumer products used in and around the home, in recreation, and in schools, from children’s toys to portable gas generators and toasters. Although the CPSC’s regulatory purview is quite broad, a number of product categories fall outside the CPSC’s jurisdiction.",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "Consumer Product Safety Commission",
               "l1OrgKey": 100500269
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500269"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100500269.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500307,
               "agencyName": "U.S. Election Assistance Commission",
               "cfdaBur": 0,
               "cfdaCode": "90",
               "cfdaOmb": 525,
               "createdBy": "",
               "createdDate": 1205416386000,
               "fullParentPath": "100500307",
               "fullParentPathName": "US_Election_Assistance_Commission",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1444320925000,
               "name": "U.S. Election Assistance Commission",
               "shortName": "",
               "sourceCfdaPk": "c815257f3a2ae633546c266f02849825",
               "sourceParentCfdaPk": "",
               "summary": "The U.S. Election Assistance Commission (EAC) was established by the Help America Vote Act of 2002 (HAVA). Central to its role, the Commission serves as a national clearinghouse and resource for information and review of procedures with respect to the administration of Federal elections. According to the text of HAVA, the law was enacted to, establish a program to provide funds to States to replace punch card voting systems, to establish the Election Assistance Commission to assist in the administration of Federal elections and to otherwise provide assistance with the administration of certain Federal election laws and programs, to establish minimum election administration standards for States and units of local government with responsibility for the administration of Federal elections, and for other purposes. Excerpt from The Help America Vote Act of 2002 The Help America Vote Act of 2002 (HAVA) requires the Election Assistance Commission (EAC) to: Generate technical guidance on the administration of federal elections. Produce voluntary voting systems guidelines. Research and report on matters that affect the administration of federal elections. Otherwise provide information and guidance with respect to laws, procedures, and technologies affecting the administration of Federal elections. Administer payments to States to meet HAVA requirements. Provide grants for election technology development and for pilot programs to test election technology. Manage funds targeted to certain programs designed to encourage youth participation in elections. Develop a national program for the testing, certification, and decertification of voting systems. Maintain the national mail voter registration form that was developed in accordance with the National Voter Registration Act of 1993 (NVRA), report to Congress every two years on the impact of the NVRA on the administration of federal elections, and provide information to States on their responsibilities under that law. Audit persons who received federal funds authorized by HAVA from the General Services Administration or the Election Assistance Commission. Submit an annual report to Congress describing EAC activities for the previous fiscal year.  About the U.S. Election Assistance Commission. The U.S. Election Assistance Commission (EAC) was established by the Help America Vote Act of 2002 (HAVA). Central to its role, the Commission serves as a national clearinghouse and resource for information and review of procedures with respect to the administration of Federal elections. HAVA requires the EAC to: Develop technical guidance on the administration of federal elections. Produce voluntary voting systems guidelines.  Research and report on matters that affect the administration of federal elections.  Provide information and guidance with respect to laws, procedures, and technologies affecting the administration of Federal elections. Administer payments to States to meet HAVA requirements. Provide grants for election technology development and for pilot programs to test election technology. Manage funds targeted to certain programs designed to encourage youth participation in elections. Develop a national program for the testing, certification, and decertification of voting systems. Maintain the national mail voter registration form that was developed in accordance with the National Voter Registration Act of 1993 (NVRA), report to Congress every two years on the impact of the NVRA on the administration of federal elections, and provide information to States on their responsibilities under that law. Audit persons who received federal funds authorized by HAVA from the General Services Administration or the Election Assistance Commission. Submit an annual report to Congress describing EAC activities for the previous fiscal year. For additional information, visit the U.S. Election Assistance Commission online at www.eac.gov.\n",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [
                  {
                     "addressKey": 100272450,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate": 1208970920000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444320925000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "US Election Assistance Commission",
               "l1OrgKey": 100500307
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500307"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100500307.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100500343,
               "agencyName": "Delta Regional Authority",
               "cfdaBur": 0,
               "cfdaCode": "90",
               "cfdaOmb": 517,
               "createdBy": "",
               "createdDate": 1205416341000,
               "fullParentPath": "100500343",
               "fullParentPathName": "Delta_Regional_Authority",
               "isSourceCfda": true,
               "lastModifiedBy": "",
               "lastModifiedDate": 1444319926000,
               "name": "Delta Regional Authority",
               "shortName": "",
               "sourceCfdaPk": "fc1984c2a4d67a242805fe9ea68de427",
               "sourceParentCfdaPk": "",
               "summary": "To assist the eight-state, 240-county Mississippi Delta region in obtaining the transportation and basic public infrastructure, skills training, and opportunities for economic development essential to strong local economies. The DRA was created as a Federal-State partnership. DRA will focus on: basic public infrastructure in distressed counties and isolated area of distress; transportation infrastructure facilitating the economic development of the region; business development; and job training or employment-related education.",
               "type": "DEPARTMENT",
               "level": 1,
               "orgAddresses": [
                  {
                     "addressKey": 100272463,
                     "city": "",
                     "countryCode": "US",
                     "createdBy": "bb863595cd3aee02b74b10d5ca46fe94",
                     "createdDate": 1208872033000,
                     "isSourceCfda": true,
                     "lastModifiedBy": "036016aa5b797617c6023036f5c2df78",
                     "lastModifiedDate": 1444319926000,
                     "state": "",
                     "streetAddress": "",
                     "type": "M",
                     "zipcode": ""
                  }
               ],
               "hierarchy": [],
               "l1Name": "Delta Regional Authority",
               "l1OrgKey": 100500343
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100500343"
               },
               "logo": {
                  "href": "http://s3.amazonaws.com/iae-federal-organization-icons/100500343.jpg"
               }
            }
         },
         {
            "org": {
               "orgKey": 100002103,
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-1",
               "createdBy": "MIGRATOR",
               "createdDate": 838684800000,
               "description": "FEDERAL ELECTION COMMISSION",
               "fpdsOrgId": "9506",
               "cgac": "360",
               "fullParentPath": "100002103",
               "fullParentPathName": "FEDERAL_ELECTION_COMMISSION",
               "isSourceFpds": true,
               "lastModifiedBy": "GBRAVEBOY",
               "lastModifiedDate": 1140652800000,
               "name": "FEDERAL ELECTION COMMISSION",
               "orgCode": "ORG-1003",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9506",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "FEDERAL ELECTION COMMISSION",
               "l1OrgKey": 100002103
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100002103"
               }
            }
         },
         {
            "org": {
               "orgKey": 100000000,
               "agencyName": "Department of Defense",
               "categoryDesc": "DEPARTMENT",
               "categoryId": "CAT-3",
               "cfdaBur": 0,
               "cfdaCode": "12",
               "cfdaOmb": 7,
               "createdBy": "",
               "createdDate": 1144972800000,
               "description": "DEPT OF DEFENSE",
               "fpdsCode": "9700",
               "fpdsOrgId": "9700",
               "cgac": "097",
               "fullParentPath": "100000000",
               "fullParentPathName": "DEPT_OF_DEFENSE",
               "isSourceCfda": true,
               "isSourceCwCfda": true,
               "isSourceFpds": true,
               "lastModifiedBy": "UI",
               "lastModifiedDate": 1493396408118,
               "name": "DEPT OF DEFENSE",
               "orgCode": "ORG-1144",
               "shortName": "DOD office of General Affairs",
               "sourceCfdaPk": "808c942c5a840df8cb96604f8883eafb",
               "sourceParentCfdaPk": "",
               "summary": " Please enter the description of this organization in this text box. Also, make sure that your description is accurate and feel free to come back and update if you have missed anything",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "9700",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "DEPT OF DEFENSE",
               "l1OrgKey": 100000000
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100000000"
               }
            }
         },
         {
            "org": {
               "orgKey": 100546303,
               "a11TacCode": 1232,
               "cfdaCode": "1232",
               "createdBy": "UI",
               "createdDate": 1493818630529,
               "fpdsCode": "13245",
               "fullParentPath": "100546303",
               "fullParentPathName": "TEST_DEPT",
               "lastModifiedBy": "UI",
               "lastModifiedDate": 1493818680482,
               "name": "Test Dept",
               "ombAgencyCode": "",
               "shortName": "td",
               "startDate": 1576108800000,
               "summary": "test",
               "tas2Code": "123312",
               "tas3Code": "123231",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "13245",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "TEST DEPT",
               "l1OrgKey": 100546303
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100546303"
               }
            }
         },
         {
            "org": {
               "orgKey": 100546304,
               "cfdaCode": "",
               "createdBy": "UI",
               "createdDate": 1493819455382,
               "fpdsCode": "",
               "fullParentPath": "100546304",
               "fullParentPathName": "TEST_DEPT",
               "lastModifiedBy": "UI",
               "lastModifiedDate": 1493819465772,
               "name": "Test Dept",
               "ombAgencyCode": "",
               "shortName": "TD",
               "startDate": 1576108800000,
               "summary": "Test",
               "tas2Code": "",
               "tas3Code": "",
               "type": "DEPARTMENT",
               "level": 1,
               "code": "",
               "orgAddresses": [],
               "hierarchy": [],
               "l1Name": "TEST DEPT",
               "l1OrgKey": 100546304
            },
            "_link": {
               "self": {
                  "href": "http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100546304"
               }
            }
         }
      ]
   });
  }

  public getOrganizationById(id: string, includeChildrenLevels: boolean, includeOrgTypes: boolean = false, status: string = 'all', pageSize: number = 10, pageNum: number = 1, orderBy: string = "asc"): any {
    if (includeChildrenLevels) {
      return Observable.of({
        "_embedded":[
           {
              "org":{
                 "orgKey":100006688,
                 "agencyName":"General Services Administration",
                 "categoryDesc":"DEPARTMENT",
                 "categoryId":"CAT-1",
                 "cfdaCode":"39",
                 "fpdsCode":"4700",
                 "fpdsOrgId":"4700",
                 "cgac":"047",
                 "fullParentPath":"100006688",
                 "fullParentPathName":"GENERAL_SERVICES_ADMINISTRATION",
                 "modStatus":"ACTIVE",
                 "name":"GENERAL SERVICES ADMINISTRATION",
                 "summary":"Establishes policy and provides regulations.",
                 "type":"DEPARTMENT",
                 "level":1,
                 "code":"4700",
                 "hierarchy":[
                    {
                       "org":{
                          "orgKey":100120624,
                          "agencyName":"Federal Acquisition Service (FAS)",
                          "categoryDesc":"AGENCY",
                          "categoryId":"CAT-2",
                          "fpdsCode":"4732",
                          "fpdsOrgId":"4732",
                          "cgac":"047",
                          "fullParentPath":"100006688.100120624",
                          "fullParentPathName":"GENERAL_SERVICES_ADMINISTRATION.FEDERAL_ACQUISITION_SERVICE",
                          "modStatus":"ACTIVE",
                          "name":"FEDERAL ACQUISITION SERVICE",
                          "parentOrgKey":100006688,
                          "shortName":"FAS",
                          "type":"AGENCY",
                          "level":2,
                          "code":"4732",
                          "hierarchy":[
     
                          ],
                          "parentOrg":"GENERAL SERVICES ADMINISTRATION",
                          "l1Name":"GENERAL SERVICES ADMINISTRATION",
                          "l2Name":"FEDERAL ACQUISITION SERVICE",
                          "l1OrgKey":100006688,
                          "l2OrgKey":100006688
                       },
                       "_link":{
                          "self":{
                             "href":"http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100120624"
                          }
                       }
                    },
                    {
                       "org":{
                          "orgKey":100012540,
                          "categoryDesc":"AGENCY",
                          "categoryId":"CAT-2",
                          "fpdsOrgId":"4735",
                          "fullParentPath":"100006688.100012540",
                          "fullParentPathName":"GENERAL_SERVICES_ADMINISTRATION.FEDERAL_ACQUISITION_SERVICE",
                          "modStatus":"ACTIVE",
                          "name":"FEDERAL ACQUISITION SERVICE",
                          "parentOrgKey":100006688,
                          "type":"AGENCY",
                          "level":2,
                          "code":"4735",
                          "hierarchy":[
     
                          ],
                          "parentOrg":"GENERAL SERVICES ADMINISTRATION",
                          "l1Name":"GENERAL SERVICES ADMINISTRATION",
                          "l2Name":"FEDERAL ACQUISITION SERVICE",
                          "l1OrgKey":100006688,
                          "l2OrgKey":100006688
                       },
                       "_link":{
                          "self":{
                             "href":"http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100012540"
                          }
                       }
                    },
                    {
                       "org":{
                          "orgKey":100009826,
                          "categoryDesc":"AGENCY",
                          "categoryId":"CAT-2",
                          "fpdsOrgId":"4730",
                          "fullParentPath":"100006688.100009826",
                          "fullParentPathName":"GENERAL_SERVICES_ADMINISTRATION.FEDERAL_ACQUISITION_SERVICE",
                          "modStatus":"ACTIVE",
                          "name":"FEDERAL ACQUISITION SERVICE",
                          "parentOrgKey":100006688,
                          "type":"AGENCY",
                          "level":2,
                          "code":"4730",
                          "hierarchy":[
     
                          ],
                          "parentOrg":"GENERAL SERVICES ADMINISTRATION",
                          "l1Name":"GENERAL SERVICES ADMINISTRATION",
                          "l2Name":"FEDERAL ACQUISITION SERVICE",
                          "l1OrgKey":100006688,
                          "l2OrgKey":100006688
                       },
                       "_link":{
                          "self":{
                             "href":"http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100009826"
                          }
                       }
                    },
                    {
                       "org":{
                          "orgKey":100038112,
                          "categoryDesc":"AGENCY",
                          "categoryId":"CAT-2",
                          "fpdsOrgId":"4725",
                          "cgac":"047",
                          "fullParentPath":"100006688.100038112",
                          "fullParentPathName":"GENERAL_SERVICES_ADMINISTRATION.FEDERAL_PROPERTY_RESOURCES_SERVICE",
                          "modStatus":"ACTIVE",
                          "name":"FEDERAL PROPERTY RESOURCES SERVICE",
                          "parentOrgKey":100006688,
                          "type":"AGENCY",
                          "level":2,
                          "code":"4725",
                          "hierarchy":[
     
                          ],
                          "parentOrg":"GENERAL SERVICES ADMINISTRATION",
                          "l1Name":"GENERAL SERVICES ADMINISTRATION",
                          "l2Name":"FEDERAL PROPERTY RESOURCES SERVICE",
                          "l1OrgKey":100006688,
                          "l2OrgKey":100006688
                       },
                       "_link":{
                          "self":{
                             "href":"http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100038112"
                          }
                       }
                    },
                    {
                       "org":{
                          "orgKey":100038166,
                          "categoryDesc":"AGENCY",
                          "categoryId":"CAT-2",
                          "fpdsOrgId":"4700",
                          "cgac":"047",
                          "fullParentPath":"100006688.100038166",
                          "fullParentPathName":"GENERAL_SERVICES_ADMINISTRATION.GENERAL_SERVICES_ADMINISTRATION",
                          "modStatus":"ACTIVE",
                          "name":"GENERAL SERVICES ADMINISTRATION",
                          "parentOrgKey":100006688,
                          "type":"AGENCY",
                          "level":2,
                          "code":"4700",
                          "hierarchy":[
     
                          ],
                          "parentOrg":"GENERAL SERVICES ADMINISTRATION",
                          "l1Name":"GENERAL SERVICES ADMINISTRATION",
                          "l2Name":"GENERAL SERVICES ADMINISTRATION",
                          "l1OrgKey":100006688,
                          "l2OrgKey":100006688
                       },
                       "_link":{
                          "self":{
                             "href":"http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100038166"
                          }
                       }
                    },
                    {
                       "org":{
                          "orgKey":100173615,
                          "agencyName":"Board of Contract Appeals",
                          "categoryDesc":"AGENCY",
                          "categoryId":"CAT-2",
                          "fpdsCode":"4712",
                          "fpdsOrgId":"4712",
                          "cgac":"047",
                          "fullParentPath":"100006688.100173615",
                          "fullParentPathName":"GENERAL_SERVICES_ADMINISTRATION.GSA_BOARD_OF_CONTRACT_APPEALS",
                          "modStatus":"ACTIVE",
                          "name":"GSA BOARD OF CONTRACT APPEALS",
                          "parentOrgKey":100006688,
                          "type":"AGENCY",
                          "level":2,
                          "code":"4712",
                          "hierarchy":[
     
                          ],
                          "parentOrg":"GENERAL SERVICES ADMINISTRATION",
                          "l1Name":"GENERAL SERVICES ADMINISTRATION",
                          "l2Name":"GSA BOARD OF CONTRACT APPEALS",
                          "l1OrgKey":100006688,
                          "l2OrgKey":100006688
                       },
                       "_link":{
                          "self":{
                             "href":"http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100173615"
                          }
                       }
                    },
                    {
                       "org":{
                          "orgKey":100178659,
                          "categoryDesc":"AGENCY",
                          "categoryId":"CAT-2",
                          "fpdsOrgId":"4710",
                          "cgac":"047",
                          "fullParentPath":"100006688.100178659",
                          "fullParentPathName":"GENERAL_SERVICES_ADMINISTRATION.INFORMATION_SECURITY_OVERSIGHT_OFFICE",
                          "modStatus":"ACTIVE",
                          "name":"INFORMATION SECURITY OVERSIGHT OFFICE",
                          "parentOrgKey":100006688,
                          "type":"AGENCY",
                          "level":2,
                          "code":"4710",
                          "hierarchy":[
     
                          ],
                          "parentOrg":"GENERAL SERVICES ADMINISTRATION",
                          "l1Name":"GENERAL SERVICES ADMINISTRATION",
                          "l2Name":"INFORMATION SECURITY OVERSIGHT OFFICE",
                          "l1OrgKey":100006688,
                          "l2OrgKey":100006688
                       },
                       "_link":{
                          "self":{
                             "href":"http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100178659"
                          }
                       }
                    },
                    {
                       "org":{
                          "orgKey":100038056,
                          "categoryDesc":"AGENCY",
                          "categoryId":"CAT-2",
                          "fpdsOrgId":"4720",
                          "cgac":"047",
                          "fullParentPath":"100006688.100038056",
                          "fullParentPathName":"GENERAL_SERVICES_ADMINISTRATION.INFORMATION_TECHNOLOGY_SERVICE",
                          "modStatus":"ACTIVE",
                          "name":"INFORMATION TECHNOLOGY SERVICE",
                          "parentOrgKey":100006688,
                          "type":"AGENCY",
                          "level":2,
                          "code":"4720",
                          "hierarchy":[
     
                          ],
                          "parentOrg":"GENERAL SERVICES ADMINISTRATION",
                          "l1Name":"GENERAL SERVICES ADMINISTRATION",
                          "l2Name":"INFORMATION TECHNOLOGY SERVICE",
                          "l1OrgKey":100006688,
                          "l2OrgKey":100006688
                       },
                       "_link":{
                          "self":{
                             "href":"http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100038056"
                          }
                       }
                    },
                    {
                       "org":{
                          "orgKey":100167208,
                          "agencyName":"Office of Administrate Services (H)",
                          "categoryDesc":"AGENCY",
                          "categoryId":"CAT-2",
                          "fpdsCode":"4773",
                          "fpdsOrgId":"4773",
                          "cgac":"047",
                          "fullParentPath":"100006688.100167208",
                          "fullParentPathName":"GENERAL_SERVICES_ADMINISTRATION.OFFICE_OF_ADMINISTRATIVE_SERVICES",
                          "modStatus":"ACTIVE",
                          "name":"OFFICE OF ADMINISTRATIVE SERVICES",
                          "parentOrgKey":100006688,
                          "type":"AGENCY",
                          "level":2,
                          "code":"4773",
                          "hierarchy":[
     
                          ],
                          "parentOrg":"GENERAL SERVICES ADMINISTRATION",
                          "l1Name":"GENERAL SERVICES ADMINISTRATION",
                          "l2Name":"OFFICE OF ADMINISTRATIVE SERVICES",
                          "l1OrgKey":100006688,
                          "l2OrgKey":100006688
                       },
                       "_link":{
                          "self":{
                             "href":"http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100167208"
                          }
                       }
                    },
                    {
                       "org":{
                          "orgKey":100129759,
                          "agencyName":"Office of Citizens Services and Communications (X), Office of Business Management (XB)",
                          "categoryDesc":"AGENCY",
                          "categoryId":"CAT-2",
                          "fpdsCode":"4760",
                          "fpdsOrgId":"4760",
                          "cgac":"047",
                          "fullParentPath":"100006688.100129759",
                          "fullParentPathName":"GENERAL_SERVICES_ADMINISTRATION.OFFICE_OF_CITIZEN_SERVICES_AND_INNOVATIVE_TECHNOLOGIES",
                          "modStatus":"ACTIVE",
                          "name":"OFFICE OF CITIZEN SERVICES AND INNOVATIVE TECHNOLOGIES",
                          "parentOrgKey":100006688,
                          "type":"AGENCY",
                          "level":2,
                          "code":"4760",
                          "hierarchy":[
     
                          ],
                          "parentOrg":"GENERAL SERVICES ADMINISTRATION",
                          "l1Name":"GENERAL SERVICES ADMINISTRATION",
                          "l2Name":"OFFICE OF CITIZEN SERVICES AND INNOVATIVE TECHNOLOGIES",
                          "l1OrgKey":100006688,
                          "l2OrgKey":100006688
                       },
                       "_link":{
                          "self":{
                             "href":"http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100129759"
                          }
                       }
                    }
                 ],
                 "l1Name":"GENERAL SERVICES ADMINISTRATION",
                 "l1OrgKey":100006688
              },
              "_link":{
                 "self":{
                    "href":"http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100006688"
                 }
              },
              "count":30
           }
        ]
     });
    }
    return Observable.of({
      "_embedded":[
         {
            "org":{
               "orgKey":100533024,
               "fpdsCode":"1253",
               "fpdsOrgId":"1253",
               "fullParentPath":"100006809.100533024",
               "fullParentPathName":"AGRICULTURE_DEPARTMENT_OF.HUMAN_NUTRITION_INFORMATION_SERVICE",
               "name":"HUMAN NUTRITION INFORMATION SERVICE",
               "parentOrgKey":100006809,
               "type":"AGENCY",
               "level":2,
               "code":"1253",
               "hierarchy":[
   
               ],
               "parentOrg":"AGRICULTURE DEPARTMENT OF",
               "l1Name":"AGRICULTURE DEPARTMENT OF",
               "l2Name":"HUMAN NUTRITION INFORMATION SERVICE",
               "l1OrgKey":100006809,
               "l2OrgKey":100006809
            },
            "_link":{
               "self":{
                  "href":"http://csp-api.sam.gov/comp/federalorganizations/v1/organizations/100533024"
               }
            }
         }
      ]
   });
  }

  public getOrganizations() {
    return Observable.of({
      "_embedded":{
         "orgs":[
            {
               "org":{
                  "orgKey":100500257,
                  "agencyName":"Office of Community Services",
                  "cfdaCode":"13",
                  "createdDate":1246980681000,
                  "fullParentPath":"100500257",
                  "fullParentPathName":"Office_of_Community_Services",
                  "isSourceCfda":true,
                  "lastModifiedDate":1246980681000,
                  "name":"Office of Community Services",
                  "sourceCfdaPk":"5e8ac5057b6086b91b06c914db8306f1",
                  "sourceParentCfdaPk":"f539290a4a344c03267345eaed3b7d46",
                  "type":"DEPARTMENT",
                  "level":1,
                  "orgAddresses":[
   
                  ],
                  "hierarchy":[
   
                  ],
                  "l1Name":"Office of Community Services",
                  "l1OrgKey":100500257
               },
               "_link":{
                  "self":{
                     "href":"http://csp-api.sam.gov/minc/federalorganizations/v1/organizations/100500257"
                  }
               }
            },
            {
               "org":{
                  "orgKey":100533299,
                  "categoryDesc":"DEPARTMENT",
                  "categoryId":"CAT-3",
                  "createdBy":"FPDSADMIN",
                  "createdDate":1145045513000,
                  "description":"DEPT OF DEFENSE",
                  "fpdsOrgId":"9700",
                  "fullParentPath":"100533299",
                  "fullParentPathName":"DEPT_OF_DEFENSE",
                  "ingestedOn":1486938337090,
                  "isSourceFpds":true,
                  "lastModifiedBy":"FPDSADMIN",
                  "lastModifiedDate":1486585836000,
                  "name":"DEPT OF DEFENSE",
                  "orgCode":"ORG-1144",
                  "type":"DEPARTMENT",
                  "level":1,
                  "code":"9700",
                  "orgAddresses":[
   
                  ],
                  "hierarchy":[
   
                  ],
                  "l1Name":"DEPT OF DEFENSE",
                  "l1OrgKey":100533299
               },
               "_link":{
                  "self":{
                     "href":"http://csp-api.sam.gov/minc/federalorganizations/v1/organizations/100533299"
                  }
               }
            }
         ]
      },
      "_link":{
         "self":{
            "href":"http://csp-api.sam.gov/minc/federalorganizations/v1/organizations?orgKey=100533299,100500257"
         }
      }
   });
  }

  public getOrganizationDetail() {
    return Observable.of({
      "_embedded":[
         {
            "org":{
               "orgKey":100006688,
               "a11TacCode":47,
               "agencyName":"General Services Administration",
               "categoryDesc":"DEPARTMENT",
               "categoryId":"CAT-1",
               "cfdaBur":0,
               "cfdaCode":"39",
               "cfdaOmb":23,
               "createdBy":"",
               "createdDate":1055289600000,
               "description":"GENERAL SERVICES ADMINISTRATION",
               "fpdsCode":"4700",
               "fpdsOrgId":"4700",
               "cgac":"047",
               "fullParentPath":"100006688",
               "fullParentPathName":"GENERAL_SERVICES_ADMINISTRATION",
               "isSourceCfda":true,
               "isSourceCwCfda":true,
               "isSourceFpds":true,
               "lastModifiedBy":"",
               "lastModifiedDate":1055289600000,
               "modStatus":"ACTIVE",
               "name":"GENERAL SERVICES ADMINISTRATION",
               "ombAgencyCode":"23",
               "orgCode":"ORG-1042",
               "shortName":"",
               "sourceCfdaPk":"9eb645ae12f3ff6f0eaa94b8ee10d7c2",
               "sourceParentCfdaPk":"",
               "summary":"Establishes policy and provides regulations.",
               "tas2Code":"47",
               "tas3Code":"47",
               "type":"Dept/Ind Agency",
               "level":1,
               "logoUrl":"http://s3.amazonaws.com/iae-federal-organization-icons/100006688.jpg",
               "code":"4700",
               "orgAddresses":[
                  {
                     "addressKey":100272441,
                     "city":"",
                     "countryCode":"US",
                     "createdBy":"c8a7096908cb924969dd1122a0fd9b2d",
                     "createdDate":1208882030000,
                     "isSourceCfda":true,
                     "lastModifiedBy":"3ba0cb09903a48e06a20d00e6df474ec",
                     "lastModifiedDate":1445442452000,
                     "state":"",
                     "streetAddress":"",
                     "type":"M",
                     "zipcode":""
                  }
               ],
               "hierarchy":[
   
               ],
               "l1Name":"GENERAL SERVICES ADMINISTRATION",
               "l1OrgKey":100006688
            }
         },
         {
            "_links":[
               {
                  "link":{
                     "href":"http://csp-api.sam.gov/minc/fh/v1/organizations&fullparentpath=100006688&fullparentpathname=GENERAL_SERVICES_ADMINISTRATION",
                     "rel":"DEPARTMENT",
                     "method":"POST"
                  }
               },
               {
                  "link":{
                     "href":"http://csp-api.sam.gov/minc/fh/v1/org",
                     "rel":"DEPARTMENT",
                     "method":"PUT"
                  }
               },
               {
                  "link":{
                     "href":"http://csp-api.sam.gov/minc/fh/v2/organizations",
                     "rel":"DEPARTMENT",
                     "method":"GET"
                  }
               },
               {
                  "link":{
                     "href":"http://csp-api.sam.gov/minc/fh/v1/organizations100006688/endDate/org",
                     "rel":"DEPARTMENT",
                     "method":"DELETE"
                  }
               },
               {
                  "link":{
                     "href":"http://csp-api.sam.gov/minc/fh/v1/organizations100006688/endDate/org",
                     "rel":"OFFICE_MOVE",
                     "method":"PUT_TRANSFER"
                  }
               },
               {
                  "link":{
                     "href":"http://csp-api.sam.gov/minc/fh/v1/organizations100006688/endDate/org",
                     "rel":"AGENCY_MOVE",
                     "method":"PUT_TRANSFER"
                  }
               }
            ]
         }
      ]
   });
  }

  public getAccess() {
    return Observable.of({ "isAdmin": true, "adminLevel": 0, "isAllowed": true, "email": "justin.babbs+navy@gsa.gov", "departmentID": 100533299 })
  }
}
