#TITLE OF CHAPTER

##INTRODUCTION 

Researchers in the developmental and learning sciences make abundant use of video for studying human behavior and learning. 
Video of human subjects performing experimental tasks are coded for behaviors, themes, and events of interest.
These recordings are used to generate quantitative or qualitative data that are used for analysis, visualization and drawing inferences.
Video, as a medium for analyzing and understanding human behavior, holds great potential for reuse that is unique from other forms of data for two main reasons.
First, because video is fairly self-describing--compared to say, encoded, tabular data--it is readily transparent what is happening in a clip.
Second, video recordings can contain a wealth of information that could be extracted--ostensibly, two researchers could use the same videos to explore two entirely different phenomena about human behavior.

Databrary, a web accessible video library for researchers in the developmental and learning sciences, was created to allow for more seamless sharing and reuse of research data among researchers. 
Housed at New York University and working closely with the NYU Libraries and Information Technology Services, Databrary provides user-centered software and curation services for researchers to store, share, and manage their video data, metadata, and related research documents.

A research data repository needs data to be valuable, so a primary mission of Databrary is facilitating the contribution of research data so that they may be shared and available for other researchers to reuse.
Post-hoc curation (i.e., after the study is complete) is the typical method of contribution to data repositories, and was initially conceived of as the primary means of acquiring data.
However, post-hoc curation is cumbersome, costly, and time-consuming. 
Researchers often must revisit data that they have already collected, analyzed, and stored away [GIARLO etc.] in order to annotate and describe their contribution.
Curators are needed to process the collection and prepare it for sharing.
Because of these challenges, we decided to design tools that enable researchers to actively curate their own data, while continuing to support post-hoc curation as neccessary. 
Active curation allows researchers to organize and manage their own data as they collect it, ensuring that their dataset is ready for sharing at the end of their study with little to no added curational burden.

##TOWARDS ACTIVE CURATION 
Determining the best way to build active curation tools for this community required an understanding of the needs of researchers in the target domain and how they work with their video data. 
We began by enlisting the help of a handful of representative labs that collected video data to study human development. 
We started with a set of interview questions that attempted to elicit what these researchers would want from a service that helped them organize, manage, and eventually share their data.
These interviews were informative to some extent, but it was not until we sought to understand their current practices and the tools they use (or lack thereof) in their labs that we began to understand what kind of service and tools would best suit this domain.

We also collected a sample of their data to determine similarities and differences between them. 
This lead us to realize early on that research in this domain is characterized by a diversity of practices from lab to lab. 
As a result, datasets are heterogenously described and organized, which increases the time required to prepare these data for bringing into a repository after the fact.
Active curation addresses this problem by creating a standardized method for bringing in different types of datasets to begin with.
By understanding how researchers collect, organize, and analyze these videos and metadata, we were able to fashion a system that accomodated a diversity of existing data management practices. 
Making the system familiar and immediately useable was also a matter of employing interfaces researchers were already familiar with and supporting these interfaces with a data model that reflected how researchers already viewed the different components of the data they collected.

##IMPLEMENTATION 
###Data Model
In order for these tools to make sense, we had to adopt language and research organizing principles from our target community. 
Researchers call the analytic units of their studies sessions [BAKEMAN]. 
Within each session, we assign the general term `record` to any piece of metadata that describes a session, including the participants, activities, and research defined categories within them, which we observed to be the most common atomic components of a research session across multiple sample labs.

###Interfaces
More importantly, we needed to craft interfaces that were transparent and familiar to our community. 
Spreadsheets are a common tool employed across labs to capture session metadata.
As such, the web application view to upload, modify, and manage session metadata takes the form of a spreadsheet view, with features like auto-completion, field pre-population, and suggested entries added in for convenience.
Rows of the spreadsheet correspond to an individual session, for instance, a date, set of participants(s) and participant consents that comprise a session of data collection.
The columns correspond to basic categories of metadata (e.g., participant details, study conditions and tasks, location, language of the participant) which will help researchers manage their data and assist other researchers in finding videos of interest to them. 
Categories are fungible and can be applied as needed to the researcher's study. 
In order to lower the barrier to contribution, Databrary was designed to encourage a minimal amount of required metadata to make assets findable, instead of an exhaustive set of required metadata that might deter researchers from participating in the first place. 

In addition to allowing researchers to add and modify metadata through this interface, we have also added tools that easily enhance their ability to work with their data.
Allowing users the ability to switch the view of the spreadsheet based on a category of interest gives them the power to understand their data easily in new ways at the click of a button.
As such, active curation not only allows researchers to add their data to a repository as they work with it, but it also provides them ways to understand their data better as they collect it. 

Because we observed that an overwhelming majority of researchers in this field use desktop video coding software to annotate videos for specific behaviors, events, or themes of interest in their study, we implemented a view for managing the data and metadata in sessions that is similar to this software.
On the timeline, researchers can stream video files and visualize how files, session metadata, and other files relate to eachother temporally and thematically. 
To allow researchers to add value to their data, they can also use this interface to annotate video files on the whole, or annotate specific segments of video files with keywords and tags. 
Not only does this enhance the data, it also helps other researchers to find and make sense of what is contained in Databrary.

##NEXT STEPS 
Databrary is still being actively developed.
Now that it has been in use by its intended community for almost a year, we expect to do more organized user experience testing, getting a better understanding of what is working, what is missing, and what needs improvement. 
At the same time, by continuing to perform staff guided curation where gaps in active curation lack features for bulk uploads or bulk edits of metadata, we get a better understanding of what feature enhancements to build into active curation to allow more of these interactions to be completed by the data owners themselves.


##REFERENCES