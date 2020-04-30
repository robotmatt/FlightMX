
exports.up = function (knex) {
    return knex.schema

        .createTable("acftref", table => {
            table.increments("id").unsigned().primary();
            table.string("code")
            table.string("make")
            table.string("model")
            table.string("aircraftType")
            table.string("engineType")
            table.string("acCat")
            table.string("buildCert")
            table.integer("engineQty")
            table.integer("seats")
            table.string("acWeight")
            table.integer("speed")
        })

        .createTable("dealer", table => {
            table.increments("id").unsigned().primary();
            table.string("certificateNumber")
            table.string("Ownership")
            table.string("certificateDate")
            table.string("expirationDate")
            table.string("expirationFlag")
            table.string("certificateIssueCount")
            table.string("name")
            table.string("street")
            table.string("street2")
            table.string("city")
            table.string("state")
            table.string("zip")
            table.string("otherNamesCount")
            table.string("otherNames1")
            table.string("otherNames2")
            table.string("otherNames3")
            table.string("otherNames4")
            table.string("otherNames5")
        })

        .createTable("dereg", table => {
            table.increments("id").unsigned().primary();
            table.string("nNumber")
            table.string("serialnumber")
            table.string("mfgModelCode")
            table.string("statusCode")
            table.string("name")
            table.string("streetMail")
            table.string("streetMail2")
            table.string("citymail")
            table.string("stateMail")
            table.string("zipMail")
            table.string("engineMfgModel")
            table.string("yearMfg")
            table.string("Certification")
            table.string("region")
            table.string("countyMail")
            table.string("countryMail")
            table.string("airWorthDate")
            table.string("cancelDate")
            table.string("modeSCode")
            table.string("indicatorGroup")
            table.string("expCountry")
            table.string("lastActiveDate")
            table.string("certIssueDate")
            table.string("streetPhysical")
            table.string("streetPhysical2")
            table.string("cityPhysical")
            table.string("statePhysical")
            table.string("zipPhysical")
            table.string("countyPhysical")
            table.string("countryPhysical")
            table.string("otherNames1")
            table.string("otherNames2")
            table.string("otherNames3")
            table.string("otherNames4")
            table.string("otherNames5")
            table.string("kitMfg")
            table.string("kitModel")
        })

        .createTable("docindex", table => {
            table.increments("id").unsigned().primary();
            table.string("typeCollateral")
            table.string("collateral")
            table.string("party")
            table.string("documentId")
            table.string("drDate")
            table.string("processingDate")
            table.string("corrId")
            table.string("serialId")
        })

        .createTable("engine", table => {
            table.increments("id").unsigned().primary();
            table.string("code")
            table.string("manufacturer")
            table.string("model")
            table.string("type")
            table.integer("hp")
            table.integer("thrust")
        })

        .createTable("master", table => {
            table.increments("id").unsigned().primary();
            table.string("nNumber")
            table.string("serialnumber")
            table.string("mfgModelCode")
            table.string("engMfgModel")
            table.integer("yearMfg")
            table.string("typeRegistrant")
            table.string("name")
            table.string("street")
            table.string("street2")
            table.string("city")
            table.string("state")
            table.string("zip")
            table.string("region")
            table.string("county")
            table.string("country")
            table.string("lastActionDate")
            table.string("certIssueDate")
            table.string("certification")
            table.string("typeAircraft")
            table.string("typeEngine")
            table.string("statusCode")
            table.string("modeSCode")
            table.string("airWorthDate")
            table.string("otherNames1")
            table.string("otherNames2")
            table.string("otherNames3")
            table.string("otherNames4")
            table.string("otherNames5")
            table.string("expirationDate")
            table.string("uniqueId")
            table.string("kitMfg")
            table.string("kitModel")
        })

        .createTable("reserved", table => {
            table.increments("id").unsigned().primary();
            table.string("registrant")
            table.string("street")
            table.string("street2")
            table.string("city")
            table.string("state")
            table.string("zip")
            table.string("rsvDate")
            table.string("tr")
            table.string("expDate")
            table.string("nNumberChange")
        })

        .createTable("user", table => {
            table.increments("id").unsigned().primary();
            table.string("email").notNullable();
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable("user")
    return knex.schema.dropTable("acftref");
    return knex.schema.dropTable("dealer");
    return knex.schema.dropTable("dereg");
    return knex.schema.dropTable("docindex");
    return knex.schema.dropTable("engine")
    return knex.schema.dropTable("master")
    return knex.schema.dropTable("reserved");
};

