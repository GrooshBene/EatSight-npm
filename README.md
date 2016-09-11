# EatSight-npm
Node.js Module for EatSight API

##API Document
----------------

* function createUserKey(appKey, age, sex, location, callback) : Used to create User Auth Key

> Requiring

    appKey : api's ds-applicationKey
    age : User's Age
    sex : User's Gender
    location : User's location. Please refer to EatSight API Doc.
    callback : Function to catch a result
    
> Response
    
    { age: 20,
      sex: 'M',
      location: '1100000000',
      'DS-AccessToken': 'df3d650b-3747-4552-83e3-ddd863706c1b' }


* function getFoodInfo(appKey, userKey, searchOptions, callback)

> Requiring
    
    appKey : api's ds-applicationKey
    userKey : user's ds-accessToken
    searchOptions : A Json Object.
    callback : Function to catch a result
>> searchOptions Example

    {
            foodType: 'PFD',
            searchField: 'foodName',
            searchValue: '자갈치',
            offset: 1,
            limit: 10,
            sortField : 'foodName'
    }


