#TITLE OF CHAPTER

###ABSTRACT (is this necessary?)

Curation of video data used in research of human behavior has a very specific set of use cases and challenges.
Video of human behavior is more readily understandable on a raw viewing than are opaque datasets of encoded variables and values. 
Though the context of video within this type of research is defined by other research materials. 
Video files and their accompanying materials and metadata comprise the datasets to be collected, described, and shared for reuse.
Curating these videos and related materials present a specific set of challenges, though many of these challenges are shared across domains and across different formats and relationships of research process materials. 
Primary challenges include the difficulty of describing a dataset at length for a different purpose than it was originally collected, transporting these files for deposit, and representing them in ways that others would be able to understand and make use of.
These challenges are compounded by the traditional model of post-hoc data curation, context and information is lost from the original collection and effort is duplicate. 
Databrary is a web-based video library for the developmental and learning sciences.
In developing a user-friendly web interface for researchers to upload, share, and reuse video data, we realized early on that we needed a way for researchers to curate and manage their own data as they collected it.
We found that this is an effective way forward and provides a useful model for how other domains and institutions might approach their own active curation of research data strategy.

##INTRODUCTION (300 words)

Video as a resource for research human behavior is extremely ripe for sharing and reuse. 
First, upon an unprimed viewing, it is already apparent what is happening in a video clip, such that video is more self-describing than tabular data or data produced by proprietary software. 
Video recordings also contain a plethora of information, such that two researchers can sit down with the same video clip and extract different observations on different phenomena.  

Researchers in the developmental and learning sciences make abundant use of video for studying human behavior. 
Using video of human subjects performing experimental tasks, they can code these clips for behavior, themes, and events of interest to generate data they might analyze, visualize, and draw conclusions from. Databrary is a video library for researchers in this domain. 
Housed at New York University and with considerable support by NYU Libraries and Information Technology Services, Databrary provides software and curation services to help researchers in this domain store, share, and manage their video data, component research files, and metadata for sharing and reuse of this data with a community of authorized colleagues. 

Traditional, post-hoc curation does not scale and does not hit the mark in terms of meeting needs for how researchers need to begin to view their data management practices vis-a-vis new grant funding responsibilities and opportunities for new ways of sharing and communicating research knowledge.

##TOWARDS ACTIVE CURATION (300 words)
Determing the path towards active curation of research data started with understanding how researchers in this domain currently work with their video data. 
We began by enlisting the help of a handful of labs that collected video data to study human development. 
We set up a set of interview questions that attemtpted to elicit what these researchers would want from a service that helped them share their data. 
Though it was not until we began to ask how they currently work and observed the practices and tools they currently employed in their labs that we began to understand what kind of service would best suit this domain.

In working with these labs, we also collected an sampling of their data to compare them side by side. 
We realized early on that research in this domain is characterized by a diversity of practices from lab to lab. 
This results also in a diversity of data collected. 
In comparing data from different labs, we also understood the data modeling needs and interface design requirements that would be flexible enough to include a diversity of datasets (why divers? how diverse?). 
By understanding how researchers collect, organize, and analyze these videos in the context of our researcher, we were able to fashion a system that mirrored these existing practices, employing interfaces they were already familiar with and setting up a data model that reflected how researchers say the different components of their research related to eachother in an entity called a study, volume, or dataset.

##IMPLEMENTATION (300 words)
###Data Model
In order for this tools to make sense, we had to adopt langauage and research organizing principles from our target community of users. Researchers call the analytic units of their studies, sessions. Within each session, we assign the general term record to any peice of metadata that describes a session and the participants, activities, and research defined categories within them.
Use of language and organizing principles already familiar to researchers makes the use of these tools fall more into the background and more easily become a regular part of their existing workflow.
###Interfaces
But more importantly, we needed to craft interfaces that were transparent and familiar to our community, based on what we observed and understood from working closely with researchers in this domain. 
Spreadsheets are a common tool employed across labs to capture session metadata.
As such, the view to upload, modify, and manage session metadata takes the form of a spreadsheet view.
--EXPLAIN--
In addition to allowing researchers to add and modify metadata through this interface, we have also added tools that easily enhance their ability to work with their data that might not be readily available to some users of spreadsheets.
Allowing users the ability to switch the view of the spreadsheet based on a category of interest gives them the power to understand their data easily in new ways at the click of a button. 

Because we observed that an overwhelming majority of researchers in this field use desktop video coding software to annotate videos for specific behaviors, events, or themes of interest to their study, we implemented a view for managing the data and metadata in sessions that mimics this software.
--EXPLAIN TIMELINE--

##NEXT STEPS (100 words)
-continue engagement with researchers, gather feedback
-build and improve interfaces and workflows based on this feedback
-continue to provide staff guided curation to understand better what routine tasks might be more automated in the active curation workflows
- conclusion: 

##REFERENCES