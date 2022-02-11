/** version 1.0-------------------------------------------------------------- *
 *            Backend Assessment Database for Microsoft SQLExpress            *
 *                                                                            *
 *                            Copyrigth (c) Atos 2021                         *
 *                             All rights reserved.                           *
 *                                                                            *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR *
 * IMPLIED,  INCLUDING  BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, *
 * FITNESS  FOR  A PARTICULAR  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL *
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER *
 * LIABILITY,  WHETHER  IN AN ACTION OF CONTRACT,  TORT OR OTHERWISE, ARISING *
 * FROM,  OUT  OF  OR  IN  CONNECTION  WITH  THE SOFTWARE OR THE USE OR OTHER *
 * DEALINGS IN THE SOFTWARE.                                                  *
 *                                                                            *
 * @author: Víctor Ulises López Arias - github.com/Ulilop                     *
 * -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- *
 *                     1. Create 2 data table in SQLExpress                   *
 * -------------------------------------------------------------------------- */

/*
 * @TABLE Languages: Stores languages information
 *
 * @PRIMARY KEY
 *  id   NUMERIC: Auto generated as IDENTITY
 *
 * @COLUMNS
 *  Name NVARCHAR: The name of a language 
 *
 * @CONSTRAINTS
 *  Name should be UNIQUE and NOT NULL
 */
CREATE TABLE Languages (
  id   NUMERIC IDENTITY(1,1) PRIMARY KEY,
  name NVARCHAR(255) UNIQUE NOT NULL
);

/*
 * @TABLE Countries: Stores countries information
 *
 * @PRIMARY KEY
 *  id         NUMERIC:  Auto generated as IDENTITY
 *
 * @COLUMNS
 *  Name       NVARCHAR: The name of a country 
 *  Capital    NVARCHAR: The name of the country's capital 
 *  Population NUMERIC:  Current human population 
 * 
 * @FOREIGN KEYS
 *  languageId NUMERIC:  To Languages(ID)
 *
 * @CONSTRAINTS
 *  Name should be UNIQUE and NOT NULL
 */
CREATE TABLE Countries (
  id         NUMERIC IDENTITY(1,1) PRIMARY KEY,
  name       NVARCHAR(255) UNIQUE NOT NULL,
  capital    NVARCHAR(255),
  population NUMERIC,
  languageId NUMERIC FOREIGN KEY REFERENCES Languages(id)
);

/* -------------------------------------------------------------------------- *
 *                      2. Insert 2 records in each table                     *
 * -------------------------------------------------------------------------- */

insert into Languages values('English');
insert into Languages values('Spanish');
SELECT * FROM Languages;

INSERT INTO Countries VALUES('USA',      'Washington D.C.',25000,1);
INSERT INTO Countries VALUES('Argentina','Buenos Aires',   99999,2);
SELECT * FROM Countries;

/* -------------------------------------------------------------------------- *
 *          3. Update the first record the population field by 250000         *
 * -------------------------------------------------------------------------- */

UPDATE Countries SET Population += 250000 
WHERE id IN (
	SELECT TOP 1 id 
	FROM Countries 
	ORDER BY id ASC);
SELECT * FROM Countries;

/* -------------------------------------------------------------------------- *
 *          4. Delete countries with populations greater than 100,000         *
 * -------------------------------------------------------------------------- */
DELETE FROM Countries WHERE Population > 100000; 
SELECT * FROM Countries;

/* -------------------------------------------------------------------------- *
 *                 5. Create SQLSentence joining the 2 tables                 *
 * -------------------------------------------------------------------------- */
SELECT  Countries.name, 
		Countries.capital, 
		Countries.population, 
		Languages.name as Language 
FROM Countries 
JOIN Languages 
	ON Countries.languageId = Languages.id;

/* -------------------------------------------------------------------------- *
 *                6. Create SQLSentence grouping by Languages                 *
 * -------------------------------------------------------------------------- */
SELECT Languages.name,
	   COUNT(Countries.id) as SpokenBy
FROM Languages
JOIN Countries
	ON Countries.languageId = Languages.id
GROUP BY Languages.name;

/* -------------------------------------------------------------------------- *
 *                        7. Create Store Procedures                          *
 * Please see files:                                                          *
 * 		ProcedureSelectAll.sql                                                *
 * 		ProcedureCountriesMaster.sql                                          *
 * -------------------------------------------------------------------------- */