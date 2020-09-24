/**
 * @swagger
 * paths:
 *  /characters/:
 *   get:
 *      summary: Returns the whole list of characters.
 *      tags:
 *        - name: Reports      
 *      responses:
 *        '200':
 *          description: A JSON describing the whole wrap drive.
 *          content:
 *            application/json: 
 *              schema:
 *                type: object
 *                properties: TBD                            
 *  /character/{id}/:
 *   get:
 *      summary: Returns character by id.
 *      tags:
 *        - name: character 
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *            minimum: 1
 *            default: 1
 *          required: true
 *          description: Numeric ID of the character to get     
 *      responses:
 *        '200':
 *          description: A JSON describing the whole wrap drive.
 *          content:
 *            application/json: 
 *              schema:
 *                type: object
 *                properties: TBD  
 *  /character/{id}/update:
 *   put:
 *      summary: Returns updated character by id.
 *      tags:
 *        - name: character 
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *            minimum: 1
 *            default: 1
 *          required: true
 *          description: Numeric ID of the character to get     
 *        - in: body
 *          name: user
 *          description: The user to create.
 *          schema:
 *            type: object
 *            required:
 *              - userName
 *            properties:
 *              userName:
 *                type: string
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string 
 *      responses:
 *        '200':
 *          description: A JSON describing the whole wrap drive.
 *          content:
 *            application/json: 
 *              schema:
 *                type: object
 *                properties: TBD  
 */


    post:
      
