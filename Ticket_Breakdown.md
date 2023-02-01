# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket#1
Create a table `facilities_agents` with columns `id(PK auto increment), facility_id, agent_id, custom_agent_id` in the database.

**ETA**: 1.5 hours

### Ticket#2
- Add an input field to accept custom agent ID on the form where agent is assigned to the shift. 
- At time of submission, map it to the newly created `facilities_agents` table with agent's original ID and facility ID. 

**ETA**: 2.5 hours

### Ticket#3
- Create a function `getAgentHours(facilityId: number)`
    - This function expects `facilityId` as a parameter.
    - It should fetch `customAgentId's` and `agentId's` based on `facilityId` from the `facilities_agents` table.
    - It should use `agentId's` to fetch agent details from `Agents` table.
    - It should fetch shifts data for each agent recieved in **step 2** and calculate total hours (can be done via SQL or ORM if any)
    - Format the data in the following format:
    `[{
        customAgentId: 12,
        shiftId: 12,
        hours: 10,
        shiftMeta: {...},
        agentMeta: {...}
    }, {
        customAgentId: 12,
        shiftId: 12,
        hours: 10,
        shiftMeta: {...},
        agentMeta: {...}
    },...]`
- Send this data to  `generateReport` method in order to generate the PDF report. 

**ETA**: 4 hours

### Assumptions
- An agent can work for multiple facilities i.e he can work at two different shifts (overtime)
- Shifts table holds ids of both Agents and Facilities tables