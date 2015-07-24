#TITLE OF CHAPTER

###ABSTRACT <!-- PROBABLY WILL NOT SUBMIT WITH THIS, JUST HELPS TO ORGANIZE -->

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

Researchers in the developmental and learning sciences make abundant use of video for studying human behavior and learning. 
Video of human subjects performing experimental tasks are coded for behaviors, themes, and events of interest.
These recordings are often the 'raw' data that are used to generate quantitative or qualitative data that is used for analysis, visualization and drawing inferences. 
Video, as a medium for analyzing and understanding human behavior, holds great potential for reuse that is unique from other forms of data for two main reasons. 
First, video is largely because video is fairly self-describing--compared to say, encoded, tabular data--it is readily transparent what is happening in a clip. 
Second, video recordings can contain a wealth of information that could be extracted--ostensibly, two researchers could use the same videos to explore two entirely different phenomena about human behavior.

<!--this needs a better transition-->
Databrary is a video library for researchers in this domain. 
Housed at New York University and with considerable support by NYU Libraries and Information Technology Services, Databrary provides software and curation services to researchers in this domain to  store, share, and manage their video data, metadata, and related research documents and to reuse shared data.
This service aims to do so with the express goal of enabling open sharing and reuse of this data within a community of authorized colleagues. 
<!--let's talk about how to jazz up this description, i get that this is for the library community and we should focus on the curational and data management aspects of Databrary, but i think there is more to say here-->

A research data repository is only as good as the data that has been contributed, so a primary mission of Databrary is facilitating the contribution of research data by data owners so that the data may be shared and available for other researchers to reuse.
Post-hoc curation is the typical method of contributing data <!--LS cut: "necessary component of this process"... what is 'this process, contributing?-->, but it is cumbersome. It often requires significant effort from researchers and repository staff [GIARLO etc.]. <!--LS: more could be said here... researchers must revisit data they are finished with... but i will leave for now-->
Because of this, Databrary has designed the system to enable active curation alongside post-hoc curation. 
Active curation allows researchers to organize and manage their own data as they collect it in the lab, which provides researchers with a dataset that is ready for sharing at the end of their study with little to no additional curational burden. Moreover, the process itself provides researchers with tools that satisfy data management plan mandates by government funding agencies like the NSF and NIH [CITE]. <!--not sure it's obvious how UAYG (the data organization aspect) helps satisfy DMPs. if anything, the fact that it is shared or shareable is what satisfies the requirements. Leaving for now because I think you're on to something and it could be massaged.-->

##TOWARDS ACTIVE CURATION 
Determining the best way to build active curation tools for this community started with understanding the needs of researchers in the target domain and how they work with their video data. 
We began by enlisting the help of a handful of labs that collected video data to study human development. 
We developed a set of interview questions that attempted to elicit what these researchers would want from a service that helped them share their data.
These interviews were informative to some extent, but it was not until we sought to understand their current practices and the tools they use (or lack thereof) in their labs that we began to understand what kind of service <!--service? maybe framework?--> would best suit this domain.

We also collected a sample of their data to determine similarities and differences between them. 
This lead us to realize early on that research in this domain is characterized by a diversity of practices from lab to lab. 
As a result, datasets are heterogenously described and organized, which increases the time required to prepare these data for bringing into a repository after the fact.
Active curation addresses this problem by creating a standardized method for bringing different types of datasets to begin with.
By understanding how researchers collect, organize, and analyze these videos and metadata, we were able to fashion a system that accomodated a diversity of existing data management practices, employing interfaces researchers are already familiar with, and all undergirded by a data model that reflected how researchers viewed the different components of the data they collected [SENTENCE FEELS TOO REDUNDANT].

##IMPLEMENTATION 
###Data Model
In order for these tools to make sense, we had to adopt language and research organizing principles from our target community. 
Researchers call the analytic units of their studies sessions [BAKEMAN]. Within each session, we assign the general term `record` to any piece of metadata that describes a session, including the participants, activities, and research defined categories within them [IS THIS BASED ON ANY OBSERVATIONS?].

###Interfaces
More importantly, we needed to craft interfaces that were transparent and familiar to our community. 
Spreadsheets are a common tool employed across labs to capture session metadata.
As such, the web application view to upload, modify, and manage session metadata takes the form of a spreadsheet view, with features like auto-completion, field pre-population, and suggested entries added in for convenience.
Rows of the spreadsheet correspond to an individual session, for instance, a date, set of participants(s) and participant consents that comprise a session of data collection.
The columns correspond to basic categories of metadata (e.g., participant details, study conditions and tasks, location, language of the participant) which will help researchers manage their data and assist other researchers in finding videos of interest to them. 
Categories are fungible and can be applied as needed to the researcher's study. 
Databrary is motivated by the design decision to use a minimal, generalized set of metadata rather than an exhaustive and over specific metadata requirement. 
This is intentional as it allows for a greater number of eligible datasets to be cataloged in Databrary, as well as not to act as a deterrent to contributor participation. [NEED THESE LAST TWO SENTENCES?]

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