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
 * @PROCEDURE
 * SelectAll (@table)
 *
 * @DESCRIPTION
 * Shows all the records given a table name
 * This procedure uses dynamic SQL but prevents code inyection.
 * - table(NVARCHAR): The name of the table
 */
CREATE PROCEDURE SelectAll @table NVARCHAR(MAX)
AS
BEGIN
	DECLARE @length NUMERIC
	DECLARE @space  NUMERIC
	DECLARE @SQL    NVARCHAR(MAX)
	SET @table  = TRIM(@table)
	SET @spaceC = CHARINDEX(' ', @table + ' ') - 1
	SET @length = LEN(@table)
	IF @length  = @spaceC AND @length != 0
		BEGIN
			SET @SQL = 'SELECT * FROM ' + @table + '\;'
			EXEC sp_executesql @SQL
		END
	ELSE
		BEGIN 
			RAISERROR(N'Invalid table name ''%s''', 11, 1, @table)
		END
END

/* Use examples */
EXEC SelectAll 
	@table= 'Languages';
EXEC SelectAll '	Countries ';
/* This example fails preventing code inyection */
EXEC SelectAll 
	@table= '	Countries; DROP TABLE Countries ';
