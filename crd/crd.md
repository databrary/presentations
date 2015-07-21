#TITLE OF CHAPTER

###ABSTRACT

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

##INTRODUCTION 

Video, as a resource for researching human behavior, has great potential for sharing and reuse. 
First, video is fairly self-describing compared to encoded, tabular data in that it is already apparent what is happening in a clip upon viewing. 
Video recordings also contain a wealth of information, such that two researchers can sit down with the same video and explore two different hypotheses about human behavior.  

Researchers in the developmental and learning sciences make abundant use of video for studying human behavior. 
Using video of human subjects performing experimental tasks, they code these clips for behavior, themes, and events of interest to generate data they might analyze, visualize, and draw conclusions from. 
Databrary is a video library for researchers in this domain. 
Housed at New York University and with considerable support by NYU Libraries and Information Technology Services, Databrary provides software and curation services to help researchers in this domain store, share, and manage their video data, metadata, adn related research documents.
This service aims to do so with the specific purpose of allowing the sharing and reuse of this data within a community of authorized colleagues. 

A research data repository is only as good as the data it houses, and so a primary mission of Databrary is facilitating the contribution of research data by data owners.
Traditional, post-hoc curation is a necessary component of this process, but it does not scale well and is very time consuming for researchers and repository staff (giarlo etc.).
Addiotionally, it fails to meet the requirements of data management practices vis-a-vis new grant funding mandates [CITE (and reword)].
This is why Databrary offers, in tandem with post-hoc curation, active curation, or the giving the ability for researchers to curate their own data as they collect it in the lab.

##TOWARDS ACTIVE CURATION 
Determing the path towards active curation of research data started with understanding how researchers in this domain currently work with their video data. 
We began by enlisting the help of a handful of labs that collected video data to study human development. 
We developed a set of interview questions that attemtpted to elicit what these researchers would want from a service that helped them share their data. 
While these interviews were helpful, it was not until we began to ask how they currently work and observed the practices and tools they currently employed in their labs that we began to understand what kind of service would best suit this domain.

In working with these labs, we also collected a sampling of data to compare them side by side. 
We realized early on that research in this domain is characterized by a diversity of practices from lab to lab. 
This results also in a diversity of datasets in what their labs chose to focus on [TOO VAGUE]. 
In comparing data from different labs, we also understood that the data model and interface design requirements would have to be flexible enough to include a diversity of datasets [???]. 
By understanding how researchers collect, organize, and analyze these videos and metadata, we were able to fashion a system that accomodated a diversity existing practices, employing interfaces they were already familiar with and setting up a data model that reflected how researchers viewed the different components of the data they collected.

##IMPLEMENTATION 
###Data Model
In order for this tools to make sense, we had to adopt langauage and research organizing principles from our target community. 
Researchers call the analytic units of their studies sessions [BAKEMAN]. Within each session, we assign the general term `record` to any piece of metadata that describes a session, including the participants, activities, and research defined categories within them.

###Interfaces
More importantly, we needed to craft interfaces that were transparent and familiar to our community, based on what we observed and understood from working closely with them. 
Spreadsheets are a common tool employed across labs to capture session metadata.
As such, the web application view to upload, modify, and manage session metadata takes the form of a spreadsheet view.
Rows of the spreadsheet correspond to an individual session, for instance, a date, set of participants(s) and participant consents that comprise a session of data collection.
The columns correspond to basic categories of metadata (e.g., participant details, study conditions and tasks, location, language of the participant) which will help researchers manage their data and assist other researchers in finding videos of interest to them. 
Categories are fungible and can be applied as appropriate to the individual dimensions of the researchers study [???]. 
This is underpinned [WHAT IS?] by a design decision to use a minimal, generalized set of metadata rather than an exhaustive and over specific metadata requirement. 
This is intentional asit allows for a greater number of eligible datasets to be cataloged in Databrary, as well as not to act as a deterrent to contributor participation.

In addition to allowing researchers to add and modify metadata through this interface, we have also added tools that easily enhance their ability to work with their data that might not be readily available to some users of spreadsheets.
Allowing users the ability to switch the view of the spreadsheet based on a category of interest gives them the power to understand their data easily in new ways at the click of a button. 

Because we observed that an overwhelming majority of researchers in this field use desktop video coding software to annotate videos for specific behaviors, events, or themes of interest to their study, we implemented a view for managing the data and metadata in sessions that is similar to this software.
On the timeline, researchers can stream video files and visualize how files, session metadata, and other files relate to eachother temporally and thematically. 
To allow researchers to add value to their data, they can also use this interface to annotate video files on the whole, or annotate specific segments of video files with keywords and tags marking behaviors, phenomena. 
Not only does this enhance the data, it also helps other researchers to find and make sense of what exists in these data.

##NEXT STEPS 
While we have gathered anecdotal evidence that this approach to active curation resonates with our intended community, Databrary is still being actively developed.
Now that Databrary has been in use by it's intended community for almost a year, we expect to do more concerted user experience testing, getting a better understanding of what is working, what needs improvement, and what is missing. 
At the same time, by continuing to perform staff guided curation where gaps in active curation lack features for bulk uploads or bulk edits of metadata, we get a better understanding of what feature enhancements to build into active curation to allow more of these interactions to be completed by the data owners themselves.


##REFERENCES