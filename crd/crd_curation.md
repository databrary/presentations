#Providing Self Curation for Video Research Data

##INTRODUCTION 

Researchers in the developmental and learning sciences make abundant use of video for studying human behavior and learning. 
Video of human subjects performing experimental tasks are coded for behaviors, themes, and events of interest.
These recordings are used to generate quantitative or qualitative data that are used for analysis, visualization, and drawing inferences.
Video, as a medium for analyzing and understanding human behavior, holds great potential for reuse that is unique from other forms of data for two main reasons.
First, because video is fairly self-describing--compared to encoded, tabular data--in that it is more readily apparent what is happening in a video clip.
Second, video recordings contain a wealth of information that could be extracted--ostensibly, two researchers could use the same videos to explore two entirely different phenomena about human behavior.

Databrary, a web accessible video library for researchers in the developmental and learning sciences, was created to allow for more seamless sharing and reuse of their research data. 
Housed at New York University (NYU) and working closely with NYU Libraries and Information Technology Services, Databrary provides user-centered software and curation services for researchers to store, share, and manage their video data, metadata, and related research documents.

A research data repository needs data to be valuable, so a primary mission of Databrary is facilitating the contribution of research data so that they may be shared and available for other researchers to reuse.
Post-hoc curation (i.e., after all the data have been collected) is a common method of contribution to data repositories, and was initially conceived of as the primary means of acquiring data in Databrary.
However, post-hoc curation is cumbersome and time-consuming (Giarlo, 2013). 
In order to make a data deposit, researchers must revisit data that they have already collected, analyzed, and stored away in order to annotate and describe them for a different purpose.
Curators are needed to process the collection and prepare it for sharing (Heidorn, 2011; Federer, 2013).
Because of these challenges, we set out to design tools that enable researchers to actively curate their own data, while continuing to support post-hoc curation where appropriate. 
Active curation allows researchers to organize and manage their own data as they collect it, ensuring that their dataset is ready for sharing at the end of their study with little to no added burden.

##TOWARDS ACTIVE CURATION 
Determining the best way to build active curation tools for this community required an understanding of the needs of researchers in the target domain and how they work with their video data. 
We started by enlisting the help of a handful of representative labs that collected video data to study human development and asked them a prepared set of interview questions. 
These interviews attempted to elicit what these researchers would want from a service that helped them organize, manage, and eventually share their data.
These interviews were informative to some extent, but it was not until we observed their current practices and the tools they used (or lacked) in their labs that we began to understand what kind of service and tools would best suit this domain.

We also collected a sample of their data to determine similarities and differences between them. 
This lead us to realize early on that research in this domain is characterized by a diversity of practices from lab to lab. 
As a result, datasets are heterogeneously described and organized, which increases the time required to prepare these data for ingesting into a repository after the fact.
Active curation addresses this problem by creating a standardized method for bringing in different types of datasets to begin with.
By understanding how researchers collect, organize, and analyze these videos and metadata, we were able to fashion a user-facing repository that accommodated a diversity of existing data management practices. 
This exploration resulted in a system which uses a data model that reflects how researchers already view the different components of their data and employs interfaces with which researchers are already familiar.

##IMPLEMENTATION 
###Data Model
In order for these tools to make sense, we had to adopt language and research organizing principles from our target community. 
These researchers call the analytic units of their studies 'sessions' (Bakeman & Quera, 2012). 
Within each session, we assign the general term 'record' to any piece of metadata that describes a session. Records may include the participants, activities, and research defined study groups within them. 
The predefined records available in the upload interface were drawn from what we observed to be the most common pieces of metadata across multiple sample labs.

###Interfaces
More importantly, we needed to craft interfaces that were transparent and familiar to our community. 
Spreadsheets are a common tool employed across labs to capture session metadata.
As such, the web application view to upload, modify, and manage session metadata looks like a spreadsheet, with features like auto-completion, field pre-population, bulk editing, and suggested entries added in for convenience (See Figure 1).
Rows of the spreadsheet correspond to individual sessions.
The columns correspond to basic categories of metadata (e.g., participant details, study conditions and tasks, location, language of the participant) describing that session, which will help researchers manage their data and assist other researchers in finding videos of interest to them. 
Categories in the spreadsheet are customizable and can be applied as needed to the researcher's study. 

[FIGURE 1 HERE - spreadsheet_vol_98.png. CAPTION: Spreadsheet metadata interface for a dataset hosted on Databrary (Fabricius, 2014). For transparency purposes, Databrary exposes as much metadata about a study as possible without sharing sensitive or identifiable information.]

In addition to allowing researchers to add and modify metadata through this interface, we have also added tools that easily enhance their ability to work with their data.
Allowing users the ability to switch the view of the spreadsheet based on a category of interest gives them the power to easily gain new insights into their data at the click of a button (See Figure 2).
As such, active curation not only allows researchers to add their data to a repository as they work with it, but it also provides them ways to understand their data better as they collect it. 

[FIGURE 2 HERE - task_view_vol_98.png. CAPTION: Spreadsheet metadata interface displaying the task view (Fabricius, 2014). Users can quickly switch between views to see a summary of how many sessions contain a certain record.]

Because we observed that an overwhelming majority of researchers in this field use desktop video coding software to annotate videos for specific behaviors, events, or themes of interest in their study, we implemented a view for managing the data and metadata in sessions that is similar to this software (See Figure 3).
On the timeline, researchers can stream video files and visualize how files, session metadata, and other files relate to each other temporally and thematically. 
Researchers can also use this interface to annotate video files on the whole, or annotate specific segments of video files with keywords and tags. 
Not only does this further enrich the  metadata, but it also helps other researchers to find and make sense of what is contained in Databrary on a granular level.

[FIGURE 3 HERE - timeline_vol_9.png. CAPTION: Timeline for one of the sessions in a dataset hosted by Databrary (Adolph, 2014). Users can access video assets in the browser and data owners can manage their data using the timeline interface.]

##NEXT STEPS 
Databrary is still being actively developed.
Now that it has been in use by its intended community for almost a year, we expect to do more targeted user experience testing to get a better understanding of what is working, what is missing, and what needs improvement. 
At the same time, by continuing to perform staff-guided curation where active curation lacks features for bulk uploads or edits of metadata, we get a better understanding of what feature enhancements to build into future iterations of active curation. 

##REFERENCES

Adolph, K. (2014). Social and motor play on a playground. Databrary. Retrieved July 31, 2015 from http://dx.doi.org/10.17910/B77P4V.

Bakeman, R., & Quera, V. (2012). Behavioral observation. In H. Cooper, P. M. Camic, D. L. Long, A. T. Panter, D. Rindskopf, & K. J. Sher (Eds.), APA handbook of research methods in psychology, Vol 1: Foundations, planning, measures, and psychometrics (pp. 207-225). Washington, DC, US: American Psychological Association. doi: 10.1037/13619-013

Fabricius, W. (2014). Absence of Construct Validity in Standard False Belief Tasks. Databrary. Retrieved July 31, 2015 from http://dx.doi.org/10.17910/B7Z300.

Federer, L. (2013). The librarian as research informationist: a case study (English). Journal of the Medical Library Association, 101(4), 298-302.

Heidorn, P. B. (2011). The Emerging Role of Libraries in Data Curation and E-science. Journal of Library Administration, 51(7/8), 662-672. doi: 10.1080/01930826.2011.601269

Giarlo, M. J. (2013). Academic Libraries as Data Quality Hubs. Journal of Librarianship and Scholarly Communication 1(3):eP1059. doi: 10.7710/2162-3309.1059
