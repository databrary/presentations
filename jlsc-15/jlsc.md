# Databrary: A digital data library for storing and sharing research video

## Andrew Gordon, Lisa Steiger, David S. Millman, Rick O. Gilmore

## Abstract

Thesis (not for final copy): In order for libraries to be successful in performing research data management and developing suitable research data repositories, they need to create strategies for librarians to work more closely with researchers, to the extent that they may be embedded in their data management workflows.
- Subpoint: Databrary is a model for this, particularly for researchers that are generally "non-technical" and not as opinionated in how their data are represented in a repository (so long is it is there and can be found and shared with others).

## Introduction

Databrary (<http://databrary.org>), is a digital data library specialized for storing and sharing videos collected as raw data in the context of research about human and animal behavior. The project has financial support from the National Science Foundation (BCS-1238599) and the National Institute of Child Health and Human Development (U01-HD-076595). New York University (NYU) hosts the library and its staff, with additional support from The Pennsylvania State University (PSU). Databrary began sharing video data in 2014, so the project remains in the early stages of operation. Sharing personally identifiable research materials like video recordings has posed significant challenges along a number of dimensions. In meeting these challenges, Databrary has engaged a wide range of expertise, including substantial support from experts in the NYU Library and project staff with training in library and information science. As such, we think the project offers insights about ways libraries and librarians may engage with scholars in specific topical domains in order to serve emerging demands for sharing research data.

<!--update these stats, move this section elsewhere or this is ok? -->
The website was opened for general use in October 2014 and has accepted contributions since earlier that year. As of January 2015, it hosts 5700 video files totaling 1600 hours of recordings along with 2200 additional files. These files comprise 2400 sessions and are covered by 1300 records (including 1100 individual participants). Data originates from 35 individual contributors across 25 different universities.

In this paper, we will discuss how Databrary is similar to and differs from existing data repositories. We will describe the project's origins and rationale and motivate the focus on a specific research field (developmental science) and particular data type (recordings, especially video). The storage and sharing of identifiable recordings poses a variety of challenges. We will describe Databrary's solutions to many of them, including the development of policies and procedures to enable the sharing of identifiable data and curation practices and technologies customized for a particular research community. Finally, in laying out a roadmap for enhancements and extensions of Databrary, we will discuss our views about what lessons library and information scientists might draw from the Databrary experience. We hope to demonstrate that information professionals have important roles to play in partnership with researchers in many scholarly domains.

## Literature Review (Drew)

- Papers that discuss existing data repositories
    + Domain-general vs. domain specific
- Papers that discuss theory or practice of librarianship around data repositories
    + If we build it, will they come vs. If we build it, how will we handle the responsibility (staff, resources, how much can we help)? 
- Papers that discuss funding and institutional models for supporting research data repositories


<!-- Repositories big and small (in scope, not in size) and how they are situated in their institution -->

- Peer & Green, 2012
- Lagoze etal, 2014 (?)
- Lyle, 2014
- Witt, 2012
- Ardini, Pan, Qin, Cooley, 2013
While there are more data repositories than there are published articles that discuss them, a sampling of the current literature on data repositories and data curation largely focusing on projects that establish services for an institution or a research community. These projects have varied scopes. Some repositories capture research data across domains (Lyle 2014, Witt 2012), while others commit to a specific field of study (Peer & Green 2012, Ardini etal 2013). In either case, a main challenge to any data repository, no matter the scope, is creating a schema and workflow that is general enough to incorporate many different datasets, but focused enough that standardization and search does not become a burden to administrators, curators, and users. Amongst the important questions in terms of how these respoitories function is how are the established institutionally and how do they interface with researchers and producers of repository content. Witt (2012) dicsusses the collaboration between Purdue Library Systems and Information Technology at Purdue (ITaP). ICPSR, as discussed in Lyle (2014), instead grew as a consortium of different research institutions. P

<!-- New practices for library staff - communication with researchers/policy-->
Regardless of the repositories scope or where it is located, there is another, more general discussion about the new responsibilities and workflows that fall from these systems make up an important question for the future of these services for researchers and the role of libraries and information professionals in the development and management of these systems. 
- Bardyn, Resnick, & Camina, 2012
- Carlson, 2012
- Castelli, Manghi, & Thanos, 2013
- Federer, 2013
- Macdonald & Martinez-Uribe, 2010 (collaboration and expertise)
- McClure, 2014 (data profiles)
- MaCmillan, 2014 
Amongst the research and practice around research data and the library, the discussion focuses on the emerging role of librarians with domain expertise aimed at the research data they aspire to collect as well as the evolving roles librarians need to take in communicating the importance and specific practices in organizing and managing data, as well as taking on roles as curators of digital data. The goal of these new roles and responsibilities aim at lessening or eliminating the barriers to sharing as well as helping other researchers find and reuse the data being added to repositories. 

<!-- New practices for library staff metadata creation and technical workflow -->
- Greenberg, White, Carrier, & Scherle, 2009
- Yoon & Tibbo, 2011
- Witt, Carlson, Cragin, & Brandt, 2009
- Heidorn, 2011
- Hilliker, Wacker, & Nurnberger, 2013 (linked data and discoverability - kind of an aside)
- Nielson, 2014
- Wickett, 2012
- Pinfield etal, 2014 (but also in communication), 
- Simons & Richardson, 2012 (JLSC publication)
- Weber, Palmer, & Chao, 2012
Accompanying the discussion on new roles is a more more low level and technical assessment of the basic requirements for identifying and representing digital datasets. The questions of what is a dataset and how do we best identify any number of them in a consistent way for preservation and accessibility vary depending on how broadly or narrowly we define the domain around which a repository is built. What are the practical underpinnings to curating research data?

<!-- Outside of the library, there is discussion amongst researchers about the who what where and why of data sharing. This should not be too long.-->
- Borgman 2012
- 
A challenge for researchers sharing their data involves whether their data will make sense removed from their original context (Borgman 2012).

<!-- Overview/Tying together and prelude to rest of paper --> 
Within these intersecting discussions, we note that there is a tension between breadth and depth in collecting and preservering research data, as well as challenges and new skills for repository and library staff to learn in communicating and working with researchers around collecting their data. The latter includes anticipating their needs, mediating burdens and hardships to their participation, and enusuring the quality and provenance of their data. A lot of these concerns fall from the instutitional position of the repository and to what extent and how they include the input of researchers, research data librarians, technology support, and other stakeholders.

Finally, we understand that the specific features and virtues of a repository will come down to the community they serve, the available staff and resources available to handle not only incorporation of data but the precluding communication and exchange between researchers and repository owners, and peculiarities of the types and formats of data the repository stores.

## Databrary Project Model <!-- Rick --!>

Data sharing has attracted a growing focus within many research communities. In some fields of inquiry such as the Earth and space sciences, open data sharing has been a longstanding norm. This contrasts with the relatively low prevalence of data sharing in the behavioral sciences. Federal agencies that fund behavioral research have implemented data management planning and sharing requirements for applicants, but ethical and technical barriers to sharing sensitive data about human participants have made open data sharing uncommon in the behavioral sciences. 

These problems grow when video provides a primary stream of research data and when infants, children or adolescents are the focus of study. Videos contain personally identifiable information -- faces, voices, names spoken aloud, and possibly views of the homes of research participants. Video data collected in laboratory or home settings for research purposes requires approval by a research ethics board, informed consent from the participants, and involves a promise by the research team that a participants' identity will not be disclosed to anyone outside the research team. Video data cannot be anonymized without reducing information content. Concealing participants’ identity (e.g., by pixilation or blocking faces) would limit the utility of the data. Thus, researchers risk violating participants’ privacy if digital images are viewed or released to the public without authorization. At the same time, video has significant potential for re-use. Videos recorded in one experimental setting may often be used for other purposes.  

Recognizing that solving the problems of open video data sharing was a high priority for the developmental science research community, the NSF sponsored a workshop in September 2011 focused on assessing how to overcome the barriers to open video data sharing. Databrary Principal Investigator (PI), Karen Adolph, a leading researcher in developmental science and an advocate for the use and re-use of video data was the workshop organizer and leader. Participants included 39 researchers in developmental science, educational research, computer science, and cognitive science, along with program officers from NSF, NICHD, and IES. Discussions focused on the promises and pitfalls of open video-based data-sharing in developmental science. The strong consensus was that the barriers were surmountable and potential benefits were many.

Subsequently, Adolph assembled a new project team to flesh out a pair of project proposals that were ultimately funded by NSF and NICHD. From the beginning, the team included experts from a variety of units at the home institution, New York University (NYU) and the partner institution (PSU), including the library, information technology services, office of sponsored projects, and research compliance office. The goal of this effort was to inform project planning and ethics discussions with the broadest array of expertise available. At the same time, Adolph and Gilmore engaged experts in the developmental science community to provide guidance about the emerging project. The goal was to ensure that the repository was designed with the needs and perspectives of the target community directly in mind from the very beginning. 

#### Sharing identifiable data
- Sharing with restricted community of researchers
    + Datasets linked to publications
        * Citations
        * Excerpts
        * Other research materials
        * Raw data
    + Cross-referencing among datasets, published papers/studies
    + Expose as much metadata as possible
    + Restricted access helps with data privacy/security concerns, but may slow adoption (see below).

#### Committed contributors, community outreach...

We think the Databrary approach is novel. The same experts who helped plan the initial project proposals in the spring of 2012 sit on the advisory board and participate actively in the twice yearly board meetings. Our repository is designed in the context of researchers, not as an isolated project initiated by either the library or the central IT dept. Through the development of Databrary and engaging a community of researchers to get their data and their active involvement in a community of sharing (and practice), we have learned a lot so far about the curation needs involved working with datasets that came together through very different lab processes as well as how to represent those datasets in a standard fashion, for future access and re-use. Where there is an active discussion amongst library practitioners of the role of libraries in the collecting and management of research data, Databrary offers a model that suggests that research data repositories could benefit from working more closely to the actual research it houses data for, while also being strategically and structurally attached to Library systems through management and staff as well as through technology integrations.

### The Technical Infrastructure (Drew)

The Databrary web application is open-source and built in Scala on the Play Framework to support a responsive user interface, a complete application program interface (API), and high-performance streaming. The backend is a PostgresSQL relational database. The user interface is built primarily on the JavaScript Angular web framework, and all data access is performed through an open JSON API. 

As part of the curation process, Databrary stores at least two versions of each item of Databrary video content: a copy for access, and the received original file if it was digital, or a 10-bit YUV digital preservation copy if the original version was not digital. Currently, the access version format is H.264 (HiP) with AAC audio in an MPEG-4 container, although we expect the appropriate video formats to change over time, as has been the case with many digital video formats in
recent years.

For preservation, the original file (if digital) or the preservation copy will be stored in a long-term preservation repository managed jointly by the NYU Libraries and the central Information Technology Services unit. This repository ensures that each content item has a METS structural metadata file that associates the digital asset with its metadata. It stores files in two mirrored and geographically distributed
locations, and a third copy on offsite tape; it performs regular fixity checks; and it provides a format migration capacity, in the event that astored format becomes at risk of obsolescence.

### Enticing Contributors: Data Privacy and Community Outreach (Rick? Drew?)

In order to attract data deposits, Databrary has had to confront some the potent barriers to sharing.

#### Securely sharing identifiable research data
- Videos are identifiable
    + Can't be anonymized without undermining/destroying data reuse value.
    + How to share while maintaining participant privacy
    + Concerns especially significant when considering infants and children, the main focus of Databrary's initial target research community.
- IRB and privacy concerns that needed to be addressed - community building that follows from this
-  Privacy concerns impact the curation process in that video data has identifiable data and so that would either need to be reviewed for access or completely redacted before being ingested. Ensuring proper access restrictions was also an important component in contributor buy-in.
- What to share? When to share? Who should share?
    - Data Sharing Manifesto

- Databrary is designed to work more closely with researchers (i.e."designed in the context of researchers").
- Community outreach/training, hands-on support.
- Meeting researchers more than half-way.
- Bringing expertise from library/information science to the research enterprise at an early stage (research informationists).
- Approach is working
    - 70+ users in first year, 35 contributors, X files

### Institutional Positioning: Support from University Entities and funding partners (David)

- "Relationship with not only the central library but also with other university central services, such as central IT, sponsored projects, legal."
- Privacy policies, language developed with sponsored projects and IRB staff at NYU and PSU.
- Cooperative agreement, active participation by agency officials.

### Services for Scholarly Communication (Rick?)

- Provide valid citations in standard format
- Citations for subcomponents (e.g., excerpts)
- Other research materials
- Raw data

### Curation (Drew)

Databrary supports both after the fact and active curation. After the fact curation consists of ingesting datasets after collection has been completed and largely after all study derivatives (research papers, analyses, etc.) have been created. Active curation refers to Databrary's user interface that allows researchers upload their video data and attaching metadata as they collect it during the course of their study. 

We learned early on that a minimal amount of metadata for finding and reusing datasets was preferable to exhaustive descriptions of data. The latter burdens researches, reducing their incentive to participate. The end result of both available curation processes is a system that defines and supports a minimum requirement for metadata to standardize representation of datasets while facilitatin discovey and sharing, while allowing researchers and staff to add additional metadata where time and resources permit. The two different curation methods are described in more detail below. 

#### After-the-fact/archival curation 

The challenge that any data repository will face, regardless of size and scope, is how to define a schema that will accept a wide variety of datasets, while adding a level of standardization that allows them to be easily searched and acted upon (FRBR - Saatchi & Hourcle).

Communication with researchers remains a key component to the curation process. The act of discussing with researchers their data that had already been collected for incorporation into Databrary was and continues to be an important step in understanding overall how our target contributors envision their data inside of a repository and how to develop a generalized schema that would meet the diverse needs of each individual lab.

Because data that had once been gathered under a very different set of participant consents and IRB permissions, this communication is also crucial in understanding how we might interpret pre-existing restrictions on the data in a way that meets the criteria for bringing the data into Databrary. Becuase these access restrictions apply not only to the overall study level, but also to the session and individual file level, gathering this metadata comprises a non-trivial amount of curation effort and informs the policy and documentation we share with our current and potential contributors and repository users.

In addition to communication, collaboration between embedded library staff and staff familiar with the practices and interpretation of data within a behavioral science context is important for ensuring the quality and organization of the data for ingest. 

Once a dataset has been approved for ingesting and the contributor has been onboared via the authorization process, we begin the process of gathering, organizing, and preparing the data for ingest. Due to the nature of video data being identifying and differing lab practices around gathering personally identifying information, it is sometimes the case that staff time will need to be devoted to reviewing video clips for personal information we do not want to upload, such as residential address or social security number if these pieces of information were captured during a lab experiment. In the case of older video collections, where relevant metadata may have been lost or not documented to begin with, we will also review videos for any relevant metadata related to participant tasks or conditions. Not only does this require staff time, but also some familiarity with the domain of behavioral science.

Finally, once all the metadata has been organized into a set of CSV files and video files are uploaded to a staging server for ingest, set of server scripts will merge the metadata into a JSON file which is then uploaded via the web application. This process then starts of the uploading of the video assets, creation of the sessions and records, and the video files are transcoded to a standard format, clipped to remove identifying information, and stored on the long-term preservation location within NYU's ITS data centers.

#### Active curation

One of the lessons we learned early on is that it was a challenge for researchers to prepare data once their study had completed. Additionally, we did not want Databrary only to be a final resting place for the products of our contributors research, but an active community. As a tool that would also assist contributors in completing the requirements of their data management plan, we purposefully designed the application and the surrounding policies and IRB agreements to anticipate that researchers will begin a study with using Databrary as a space for managing as well as preserving their research data. 

Though in order to be useful, data management through Databrary would have to reflect what we observed to be some of the common practices undertaken in collecting and keeping track of data through its lifecycel. Active curation refers to the data management features available in Databrary's user interface for researchers to upload their lab data as they collect it. Through ongoing discussion with Databrary users and potential users of Databrary, we have designed and developed into the web application a spreadsheet view for editing high level session metadata (e.g. participants, conditions of study, tasks in the experiment, session access levels, study groups etc.) and a timeline view for viewing and uploading video assets related to sessions. The timeline view is akin to video editing software and not only allows users to upload and position video files along the time line, but also to annotate video sections with user-generated tags. These metadata are then an index point for search and discoverability.

[Screen shots since no page limit?]

It is the active curation feature that differentiates Databrary from institutional repositories and could not have been possible with out the focus on a particular research field as well as the positioning and mission to more actively include its intended community throughout its development. The decision to create a spreadsheet that focuses on sessions gets derived from the observational session being the basic analytic unit of behavioral science (Bakeman & Quera, 2012). Using a timeline for display and management of video assets comes from desktop coding tools like ____, which many researchers in this field use to code their videos for the behaviors and phenomena of interest for their study. As such, being closely tied to the practices of researchers in this domain allowed us to elaborate on the idea of a repository to provide them not only with representational modelf for their data that they are familiar with, but also a workflow to make management of their data more efficient, and also contribute to a more common practice across labs and institutions.

## Next Steps

### Expand number and diversity of datasets (Drew)

- Continue to document and standardize curation processes and learn from library and data services staff about collection development and dataset profiles.
- Education and cognitive/social psychology communities, anthropology, linguistics.

### Enhance Databrary's feature-set (Drew)

- Build on discovery and search (this was in last paper, not sure how relevant it is here)
- Visualization, tagging
- Build and improve ability to excerpt videos for scholars to communicate research findings and exemplar data samplings at conferences in the classroom.
- Support for new temporally dense data streams
    + Physiology
    + Gaze tracking
    + Kinematics

### Improve Active/Self-Curation (Drew)

- Field test, adapt based on feedback.
- Freak-out: researchers are often surprised at the appearance of their data as it becomes further curated.  Possibly concerned about perceived flaws in their process?  (+ Drew's phrasing: "appealing to the contributing parties.")

### Integrate with other services (Drew)

- Connect more with library systems (OAI, Library-specific metadata exports, Linked Data)
- Connect with other data repositories
    + Open Science Framework
    + Dataverse
    + ICPSR?
- API for external data-mining, data tagging services.
- Data linking to other geo- or time-coded open data sets.

### Plan for long-term sustainability

- Cost share data management/data curation services on new grants
- Institutional subscription model

## Conclusion


---

# Deleted text

Libraries already house other products of scholarly activity such as journal articles and books, but the raw materials behind published research remains unavailable in most cases.

So, video poses significant challenges to the ideal of open data sharing, but the challenges are balanced by a high potential for accelerating the pace of scientific discovery.

- There is no history of sharing within developmental science.
    - Barriers include
        * Collection of sensitive/private data, e.g. video
        * Research ethics policies
        * Technical barriers -- videos are large
        * Curation for sharing not part of scientific workflow
            - No incentive to share, many discincentives
