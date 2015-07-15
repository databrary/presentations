Notes on a case study for Curating Research Data: Practical Strategies for Your Digital Repository
==================================================================================================

0. Upload as you go.
1. Building collections with research data is hard
2. Researchers are hard-pressed to gather up and annotate their data for deposit when they are done with it.
3. At the same time, they are already being pushed to take an active approach on data management plans
4. In providing a data management and sharing/reuse platform for video data, we learned early on that collecing this data after the fact was problematic for two reasons
    a. it was difficult to gather it all up
    b. more importantly, it had been collected under an entirely different set of releases
5. Upload as you go is the solution for merging data management with data curation for sharing and discoverability

- would this in anyway be related to the human research subject dimension?
- that is, is the workflow defined by the policy and informed consent requirement?
- how to curate and share human subject data?
- what's the pipeline (starting with getting consent)

*** As a case study, what is the best way to convey this to those working specifically in the Library, where building another Databrary is not exactly an option.

  - This is how we are set up and this is how we have conceptualized and addressed the challenge of curation (building an interface)
  - While not replicable on the whole, there has to be ways that it might be adopted by those in the library, if only in schematic fashion.
  - Don't focus on the technology, focus on the interactions, the intention, and the connection of skillsets.
  
##Outline

Databrary: the case for at source curation. Getting upstream of the data collection and curation process. Curating video data in the behavioral and learning sciences.

###INTRODUCTION
Brief assessment of the challenge that Databrary is trying to meet.
- Video presents unique opportunities for sharing
- But video data are difficult to share:
    - Current research practices around collecting and managing video data differ from lab to lab
    - Video data are large and therefore difficult to transport
    - That also makes them expensive to store in aggregate
- In this specifc domain (and many others like it), collecting video data present challenges for participant privacy since it's possible to identify a participant by face or voice where any other PII are redacted.
- Labs all have different data management practices - small science (or should we avoid that conversation at this point)
- Furthermore, this type of active curation is very specific to how datasets in the behavioural sciences come together, but as datasets are characterized by many component pieces, we think this approach would potentially apply to any domain where data are collected in many pieces and over time.
- There are long term concerns (preservation, findability, understandability) and there are immediate access concerns (policies, reuse, understandability). There's the Institutional Repository and the Archive. (RDM:Practical Strategies for Information Professionals - p. 204)

Databrary is the solution to these challenges. But, even if we create Datarbary with overcoming these essential challenges, we still need to get video data and metadata into the repository. Beyond resolving the underlying challenges to _sharing_ data, these are the practical challenges to gathering and curating data:
- Getting the right before collection, it's difficult to go back and revise the consents
- Significant cleaning and shaping of data is necessary for ingest. If collecting in Databrary, no cleaning
- Researchers are loathe to return to a dataset to get it described and annotated for sharing with others on a general level
- Motivations for sharing research data are diffuse (Youngseek & Adler, 2015)

###STEPS TOWARDS ACTIVE CURATION
####Engagement with researchers
- Conduct interviews of a sampling of labs: how do they collect their data, how do they expect to access their data, how do they expect to access the data of others.
- Started out thinking about what are the right interview questions about a service that they wanted. That didn't work as well as it could have, turned to just asking them how they currently work watching how researchers worked, and what forms they used.
- Also collected a sampling of data from these labs and spent a good amount of time analyzing how to generalize across all of them.
- Create composite user stories based on interviews with research labs about the service that they would need.

####Turning information into a rough design
- Implementation of sheer curation approach
  - design a repository with the help of NYU Libraries and ITS
  - design a web application that handles authorization of users and provides the necessary access restrictions around data sent to the repository
  - develop user interfaces for uploading and modifying data and metadata sent to the repository (spreadsheet, timeline).
- Relationships between objects?
- Telling the story of how objects came to be and how they came to be related to others?

###HOW IT WORKS
- spreadsheet
- timeline
- understanding this practice and evolving (datavyu as a precursor?)
- how databrary fits in with orther efforts to collect research data for sharing

###NEXT STEPS/FUTURE DIRECTIONS
- Continue engagement with researchers (user experience testing)
- Build, enhance, and improve based on continued interaction with researchers.  
- Ongoing sheer curation is informed by strategic post hoc curation and ingest interventions (a researcher has a bulk upload or bulk edit - or has some encoded data that they themselves aren't able to add themselves without considerable effort, e.g. data from video coding software) - curation-upload-as-you-go is a feedback feedback loop.
- How difficult is it for information specialists to work in a science they are unfamiliar with? (sheer_curation_full) - what we needed more of was domain experts that could help interpret what these researchers are doing.
