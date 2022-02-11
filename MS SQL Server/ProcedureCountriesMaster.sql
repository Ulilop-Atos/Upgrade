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

/**
 * @PROCEDURE CountriesMaster
 *
 * @DESCRIPTION
 * Controls the table Countries
 * CountriesMaster [@type | @name | @capital | @population | @language | @id]
 * @type      (Str): 
 *     ALL    - Select all records from table
 *     INSERT - Insert record (@name is manadatory)
 *     UPDATE - Updates a record (@name or @id are manadatory)
 *     DELETE - Delete record (@name or @id are manadatory)
 * @name      (Str): The name of the country
 * @capital   (Str): The name of the country's capital 
 * @population(Int): Current human population in the country
 * @language  (Str): Official language of that country. If the languaje is not 
 *                   in Languages, is added as a new registry.
 */
CREATE PROCEDURE CountriesMaster
	@type       NVARCHAR(6)   = NULL,
	@name       NVARCHAR(255) = NULL,
	@capital    NVARCHAR(255) = NULL, 
	@population NUMERIC       = NULL,
	@language   NVARCHAR(255) = NULL,
	@id		    NUMERIC		  = NULL
AS 
BEGIN
	/* Default beahaviour */
	IF @type IS NULL OR @type = 'ALL' 
		BEGIN
			SELECT * FROM Countries
      RETURN
		END
  /* Need the id or name to continue */
  SET @name = TRIM(@name)
  IF @id IS NULL AND (@name IS NULL OR @name = '')
    BEGIN 
			RAISERROR(N'Missing id or Name.',15,1)
		END
	/* DELETE */
	IF @type = 'DELETE'
		BEGIN
			DELETE FROM Countries 
        WHERE 
          id   = @id   OR 
          Name = @name
      RETURN
		END
   /* Finding the languageId or creating a new one when needed */
  SET @language = TRIM(@language)
	DECLARE @languageId NUMERIC
	IF (NOT (@language IS NULL OR @language = '') ) AND 
     (@type = 'INSERT' OR @type = 'UPDATE')
		BEGIN
			SELECT @languageId = id 
        FROM Languages 
       WHERE Languages.name = @language
      /* If new language */
			IF @languageId is NULL
				BEGIN 
					INSERT INTO Languages VALUES (@language)
					SELECT @languageId = id 
            FROM Languages 
           WHERE Languages.name = @language
				END
		END  
  /* INSERT */
	IF @type = 'INSERT'
		BEGIN    
      INSERT INTO Countries VALUES (@name, @capital, @population, @languageId)
		END
  /* UPDATE */
	ELSE IF @type = 'UPDATE'
		BEGIN
      UPDATE Countries 
      SET
        name       = @name,
        capital    = @capital,
        population = @population,
        languageId = @languageId
      WHERE 
        id   = @id   OR 
        Name = @name
    END
	ELSE
		BEGIN
			RAISERROR(N'Invalid operation ''%s''.',15,1,@type)
		END
END;

/* Use examples */
EXEC CountriesMaster;

EXECUTE CountriesMaster
  	@type = 'INSERT',
    @name ='United Kingdom',
    @capital='London',
    @population=200000,
    @language='English';

EXECUTE CountriesMaster 'INSERT', 'China', 'Beijing', 700000,  'Chinese';
EXECUTE CountriesMaster 'UPDATE', 'China', 'Beijing', 7000000, 'Chinese';
EXECUTE CountriesMaster 'DELETE', 'China';

EXECUTE CountriesMaster 'ALL';