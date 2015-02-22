# Databrary: A digital data library for storing and sharing research video

## Andrew Gordon, Lisa Steiger, David S. Millman, Rick O. Gilmore

## Abstract

Libraries have long provided a home for a diverse range of scholarly products, but new interest has arisen in organizing, preserving, and sharing the raw materials -- the data and metadata -- that undergird the published products of research. Library and information science professionals have valuable expertise to bring to bear in the effort to create larger, more diverse, and more widely used data libraries. However, for libraries to be maximally successful in providing the research data management and preservation services required of a successful data repository, librarians must work especially closely with researchers and embed themselves in data management workflows as much as possible. The Databrary digital data library provides a model for how library and information science experts, working in a diverse team, can inform the development and implementation of a data repository that is closely linked to the needs of a specific research community. In Databrary's case, the target scholarly community represents researchers who use video as a main source of data to study human and animal development. Storing and sharing video poses policy and technical challenges that Databrary staff have solved in ways that may prove informative to the library and information science community.

## Introduction

Databrary (<http://databrary.org>), is a digital data library specialized for storing and sharing videos collected as raw data in the context of research about human and animal behavior. The project has financial support from the National Science Foundation (BCS-1238599) and the National Institute of Child Health and Human Development (U01-HD-076595). New York University (NYU) hosts the library and its staff, with additional support from The Pennsylvania State University (PSU). Databrary began sharing video data in 2014, so the project remains in the early stages of operation. Sharing personally identifiable research materials like video recordings has posed significant challenges along a number of dimensions. In meeting these challenges, Databrary has engaged a wide range of expertise, including substantial support from experts in the NYU Library and project staff with training in library and information science. As such, we think the project offers insights about ways libraries and librarians may engage with scholars in specific topical domains in order to serve emerging demands for sharing research data.

In this paper, we will discuss how Databrary is similar to and differs from existing data repositories. We will describe the project's origins and rationale and motivate the focus on a specific research field (developmental science) and particular data type (recordings, especially video). The storage and sharing of identifiable recordings poses a variety of challenges. We will describe Databrary's solutions to many of them, including the development of policies and procedures to enable the sharing of identifiable data and curation practices and technologies customized for a particular research community. Finally, in laying out a roadmap for enhancements and extensions of Databrary, we will discuss our views about what lessons library and information scientists might draw from the Databrary experience. We hope to demonstrate that information professionals have important roles to play in partnership with researchers in many scholarly domains.

## Literature Review

Databrary is a domain-specific data repository with strong ties to NYU library, but largely autonomous operations. A sampling of the current literature on data repositories and data curation shows that these features fall well within established repository norms. Some repositories capture research data across domains (Lyle 2014, Witt 2012), while others commit to a specific field of study (Peer & Green 2012, Ardini et al. 2013). There are a number of challenges inherent in creating and running a research data repository, but how repositories are established institutionally and how they interface with researchers and content producers turn out to be critical. 

Collaborations between libraries and research entities are common. Witt (2012) discusses the collaboration between Purdue Library Systems and Information Technology at Purdue (ITaP). The Inter-university Consortium for Political and Social Research (ICPSR), as discussed in Lyle (2014), emerged from the Institute for Social Research at the University of Michigan to encompass a consortium of institutional partners. An open data repository for the social sciences at Yale (Peer & Green, 2012) represents a collaboration between Yale’s Office of Digital Assets and Infrastructure (ODAI) and the Institution for Social and Policy Studies (ISPS). However, the literature provides little detail about how these sorts of collaborations emerge or about which collaborators take the initiative.

In contrast, the literature on library practices and resposibilities describes how new policies and practices around communication with the scientific community have been critical to the success of some data respositories. Purdue's Data Curation Center (DCC) has developed a process for interviewing researchers about their data curation needs in contributing to data repositories; library staff need to understand how to conduct these interviews (Carlson, 2012). Carlson (2012) finds that without the right kind of communication with researchers, "services that do not align with real-world needs of researchers will not be used." Librarians, with their strengths in metadata creation and standardization across domains, are in a key position to understand and tackle the barriers to sharing that often plague the dissemination of research data, particularly where research cultures differ drastically across domains (MacMillian 2014). Not only does a librarian working with researchers help in building a more useful repository, but a librarian whose role is embedded in and informed by working with researchers can ensure better material description and documentation. This results in more valuable research outcomes (Federer 2012). Some predict that the role of liaison librarians in data repository building will increase: Researchers will welcome assistance in reducing the burden of describing and preparing data for preservation, and this will convince more researchers to contribute data (McClure et al., 2014).

New practices for managing workflows involving technology and metadata creation will be needed in the development of successful data repositories. Research data differ from other products of research such as journal articles and books. From this, important questions arise. How should libraries represent a dataset in a manner that allows it to be cataloged, preserved, and cited (Wickett et al., 2012)? Important to keep in mind here is how representing research data outside of its original context will make it more difficult to inperpret (Borgman 2012) Also, Can libraries meet the needs of researchers who are increasingly held responsible for documenting and sharing the raw data from their research along with its products and derivatives (Heidorn, 2011; Greenberg et al., 2009)? Propagating research data is a core component of scientific communication, but a bridge between researchers and repository staff must be built to faciliate that propagation (Castelli, Manghi, & Thanos, 2013). A survey of repository staff workers in Australia and New Zealand found that building digital data repositories will require library workers to develop new skills related to the software driving these repositories and skills to communicate with IT departments (Simons & Richardson, 2012). Library staff will also need to develop working knowledge about semantic web-based metadata schema like RDF, multimedia file formats, and access concerns like copyright legislation and open access standards (Simons & Richardson, 2012). The Databrary project team's experience echos many of these points.

## Data-sharing in Developmental Science and the Origins of Databrary

In some fields, such as the Earth and space sciences or high energy physics, open data sharing has been a longstanding norm (e.g., DataONE, Virtual Observatory, Hubble, etc.). Federal agencies that fund behavioral research have implemented data management planning and sharing requirements for applicants, but ethical and technical barriers to sharing sensitive data about human participants have made open data sharing uncommon in the behavioral sciences. These problems grow when infants, children, or adolescents are the focus of study and when video provides a primary stream of research data. Both features characterize research in developmental science.

While personally identifying information can be removed from text-based data, videos may contain faces, voices, names spoken aloud, and sometimes views of the homes of research participants. These cannot be removed without reducing the information content. Further, the collection of video or other identifiable or sensitive information requires approval by a research ethics board and informed consent from the participants. The consent process formalizes a promise by the research team that a participant's identity will not be disclosed. Thus, researchers risk violating participants’ privacy if digital images are viewed or released to others without authorization. 

At the same time, video has significant potential for re-use. Video uniquely captures the complexity and richness of behavior. Accordingly, videos recorded in one experimental setting for one purpose may often be used by other investigators for other purposes (c.f., Raudies & Gilmore, 2014).

### Origins of Databrary

Recognizing that solving the problems of open video data sharing was a high priority for the developmental science research community, the NSF sponsored a workshop in September 2011 focused on assessing how to overcome the barriers to open video data sharing. Karen Adolph at NYU, a leading researcher in developmental science and an advocate for the use and re-use of video data was the workshop organizer and leader. Participants included 39 researchers in developmental science, educational research, computer science, and cognitive science, along with program officers from NSF, NICHD, and IES. Discussions focused on the promises and pitfalls of open video-based data-sharing in developmental science. The strong consensus was that the barriers were surmountable and potential benefits were many.

Subsequently, Adolph assembled a new project team to flesh out a pair of project proposals that were ultimately funded by NSF and NICHD. From the beginning, the team included experts from a variety of units at the home institution, New York University (NYU) and the partner institution (PSU), including the library, information technology services, office of sponsored projects, and research compliance office. The goal was to inform project planning and ethics discussions with the broadest array of expertise available. At the same time, Adolph and co-PI Gilmore engaged experts in the developmental science community to provide guidance about the emerging project. The goal was to ensure that the repository was designed with the needs and perspectives of the target community directly in mind from the very beginning. The result was a policy framework for sharing identifiable research data *with the permission of the individuals depicted.*

Building on the common practice of seeking a separate permission to use video recordings or photographs from a research session via a release form signed by participants or parents, the Databrary team developed template language that requests permission to share recordings and other personally identifying information with other researchers. The Databrary model involves open data sharing with other researchers, not the public at large. Researchers who seek access to Databrary must register and receive authorization from an institution that verifies the individual's identity, research ethics training, and status as an independent researcher whose scientific activities are supervised by a research ethics board. In turn, researchers promise to treat data from Databrary with care, respect the wishes of research participants and guard their privacy, and closely monitor access to Databrary by students or staff they supervise.

This access model has proven successful. Databrary began accepting contributions in early 2014 and opened for general use in October 2014. In less than a year of operation, the number of institutions with authorized users had grown to 40, with 79 individual investigators from North America, Europe, South America, and Australia. As of March 2015, 35 individual contributors representing 25 different universities had contributed video data or excerpts.

## Cornerstones of Success

The project remains in its early phase, so its long-term success is not yet known. Nevertheless, we attribute our early success to several facets: a focus on community outreach, attention to data privacy, the provision of services for scholarly communication, services for guided and active data curation, support from institutional partners, and a strong technical infrastructure.

### Community Outreach and Scholarly Communication

In developing Databrary, the project team came to understand that researchers were more likely to want to share video data with colleagues who were part of the same scholarly community and shared the same understanding about the sensitivities involved. At the same time, the project team understood that it would have to change prevailing sentiments in the developmental science community about the feasbility of sharing video data openly. Indeed, one of the original funding proposals' specific aims involved changing the culture of research around video data sharing. This led to a decision to hire a staff member with specific responsibilities for community outreach and to the hiring of a staff member with experience in library and information science. These team members interact directly with researchers to provide hands-on support at every stage of the researcher's interactions with Databrary. Staff assist with initial registration and consultation with research ethics boards, and with planning for archival or new data curation (see Curation below). The Databrary team actively seeks out new potential contributors and datasets, and the team has established partnerships with some of the main scholarly associations in the developmental and learning sciences: the Society for Research in Child Development (SRCD), the International Society on Infant Studies (ISIS), the Cognitive Development Society (CDS), and the American Educational Research Association (AERA).

Databrary has also attempted to forge a consensus on professional values concerning the questions of what materials to share, when in the research life cycle should materials be shared, who should share, and how one should acknowledge the use of shared data and other materials. Databrary's Data Sharing Manifesto (http://databrary.org/access/policies/data-sharing-manifesto.html) suggests that *all* researchers should share as much material as they are comfortable sharing and have permission to share, researchers should share as early on in the research life cycle as possible, and researchers should properly acknowledge all materials contributed by others that inform their research products. To that end, Databrary provides valid uniform resource identifiers (URIs) in a standard format for datasets as a whole and for subcomponents within them, links to persistent identifiers for publications associated with a dataset, and persistent identifiers (DOIs) for datasets hosted on Databrary. Library and information science experts have been instrumental in shaping the design and implementation of these features.

### Data Privacy

Sharing identifiable research data requires that the Databrary system restrict access to materials on the basis of both the permissions granted by individual participants and on the level of sharing a researcher has granted. Data owners provide Databrary information about the sharing permission or release level associated with each individual file. In turn, data owners decide when to share datasets -- at the end of data collection, when an associated publication goes to press, at the end of a grant -- and with whom -- selected lab members or collaborators or the Databrary research community writ large.

Privacy concerns impact the data curation process, as well. Databrary staff work closely with data contributors to determine that materials they wish to share have appropriate participant permissions. In turn, that ensuring access restrictions are enforced has turned out to be an important feature in convincing data contributors to make deposits.

### Institutional Positioning

- "Relationship with not only the central library but also with other university central services, such as central IT, sponsored projects, legal."
- Privacy policies, language developed with sponsored projects and IRB staff at NYU and PSU.
- Cooperative agreement, active participation by agency officials.

### Curation

Databrary supports both after the fact and active curation. After the fact curation consists of ingesting datasets after collection has been completed and largely after all study derivatives (research papers, analyses, etc.) have been created. Active curation refers to Databrary's user interface that allows researchers upload their video data and attaching metadata as they collect it during the course of their study. 

We learned early on that a minimal amount of metadata for finding and reusing datasets was preferable to exhaustive descriptions of data. The latter burdens researchers, reducing their incentive to participate. The end result of both available curation processes is a system that defines and supports a minimum requirement for metadata to standardize representation of datasets while facilitatin discovey and sharing, while allowing researchers and staff to add additional metadata where time and resources permit. The two different curation methods are described in more detail below. 

#### After-the-fact/archival curation 

The challenge that any data repository will face, regardless of size and scope, is how to define a schema that will accept a wide variety of datasets, while adding a level of standardization that allows them to be easily searched and acted upon (FRBR - Saatchi & Hourcle).

Communication with researchers remains a key component to the curation process. The act of discussing with researchers their data that had already been collected for incorporation into Databrary was and continues to be an important step in understanding overall how our target contributors envision their data inside of a repository and how to develop a generalized schema that would meet the diverse needs of each individual lab.

Because data that had once been gathered under a very different set of participant consents and ethics board (IRB) permissions, this communication is also crucial in understanding how we might interpret pre-existing restrictions on the data in a way that meets the criteria for bringing the data into Databrary. Becuase these access restrictions apply not only to the overall study level, but also to the session and individual file level, gathering this metadata comprises a non-trivial amount of curation effort and informs the policy and documentation we share with our current and potential contributors and repository users.

In addition to communication, collaboration between embedded library staff and staff familiar with the practices and interpretation of data within a behavioral science context is important for ensuring the quality and organization of the data for ingest. 

Once a dataset has been approved for ingesting and the contributor has been authorized for access, we begin the process of gathering, organizing, and preparing the data for ingest. Due to the nature of video data being identifying and differing lab practices around gathering personally identifying information, it is sometimes the case that staff time will need to be devoted to reviewing video clips for personal information we do not want to upload, such as residential address or social security number if these pieces of information were captured during a lab experiment. In the case of older video collections, where relevant metadata may have been lost or not documented to begin with, we will also review videos for any relevant metadata related to participant tasks or conditions. Not only does this require staff time, but also some familiarity with the domain of behavioral science.

Finally, once all the metadata has been organized into a set of CSV files and video files are uploaded to a staging server for ingest, set of server scripts will merge the metadata into a JSON file which is then uploaded via the web application. This process then starts of the uploading of the video assets, creation of the sessions and records, and the video files are transcoded to a standard format, clipped to remove identifying information, and stored on the long-term preservation location within NYU's ITS data centers.

#### Active curation

One of the lessons we learned early on is that it was a challenge for researchers to prepare data once their study had completed. Additionally, we did not want Databrary only to be a final resting place for the products of our contributors research, but an active community. As a tool that would also assist contributors in completing the requirements of their data management plan, we purposefully designed the application and the surrounding policies and IRB agreements to anticipate that researchers will begin a study with using Databrary as a space for managing as well as preserving their research data. 

Though in order to be useful, data management through Databrary would have to reflect what we observed to be some of the common practices undertaken in collecting and keeping track of data through its lifecycle. Active curation refers to the data management features available in Databrary's user interface for researchers to upload their lab data as they collect it. Through ongoing discussion with Databrary users and potential users of Databrary, we have designed and developed into the web application a spreadsheet view for editing high level session metadata (e.g. participants, conditions of study, tasks in the experiment, session access levels, study groups etc.) and a timeline view for viewing and uploading video assets related to sessions. The timeline view is akin to video editing software and not only allows users to upload and position video files along the time line, but also to annotate video sections with user-generated tags. These metadata are then an index point for search and discoverability.

[Screen shots since no page limit?]

It is the active curation feature that differentiates Databrary from institutional repositories and could not have been possible with out the focus on a particular research field as well as the positioning and mission to more actively include its intended community throughout its development. The decision to create a spreadsheet that focuses on sessions gets derived from the observational session being the basic analytic unit of behavioral science (Bakeman & Quera, 2012). Using a timeline for display and management of video assets comes from desktop coding tools like ____, which many researchers in this field use to code their videos for the behaviors and phenomena of interest for their study. As such, being closely tied to the practices of researchers in this domain allowed us to elaborate on the idea of a repository to provide them not only with representational modelf for their data that they are familiar with, but also a workflow to make management of their data more efficient, and also contribute to a more common practice across labs and institutions.

### The Technical Infrastructure

Since many of the system requirements for Databrary were novel and specific to a particular target domain, the team opted to build a new application rather than adapt an existing tool. The result is an open-source (http://github.com/databrary) web application built in Scala on the Play Framework to support a responsive user interface, a complete application program interface (API), and high-performance streaming. The backend is a PostgresSQL relational database. The user interface is built primarily on the Angular.js JavaScript framework, and all data access is performed through an open JSON API. 

As part of the curation process, Databrary stores at least two versions of each item of Databrary video content: a copy for access, and the received original file if it was digital, or a 10-bit YUV digital preservation copy if the original version was not digital. Currently, the access version format is H.264 (HiP) with AAC audio in an MPEG-4 container, although we expect the appropriate video formats to change over time, as has been the case with many digital video formats in recent years. The system uses NYU's high performance computing (HPC) cluster to transcode videos in the background using ffmpeg.

For preservation, the original file (if digital) or the preservation copy will be stored in a long-term preservation repository managed jointly by the NYU Libraries and the central Information Technology Services (ITS) unit. This repository ensures that each content item has a METS structural metadata file that associates the digital asset with its metadata. It stores files in two mirrored and geographically distributed locations, and a third copy on offsite tape; it performs regular fixity checks; and it provides a format migration capacity, in the event that astored format becomes at risk of obsolescence.

NYU Libraries have played a critical role in advising the development team about storage and computing technologies available within the NYU IT system, and in helping negotiate access to and cost-models for IT services.

### Lessons learned

The Databrary project team has learned a great deal in launching the repository, and some of the lessons may apply to others seeking to start similar initiatives. The project has had strong, consistent, and substantive support from a diverse group of advisers internal to NYU and PSU and from the scholarly community at large. Those advisers include experts in library and information sciences along with experts in research ethics, legal, grants and contracts, and big data. The same experts who helped plan the initial project proposals in the spring of 2012 sit on the advisory board and participate actively in the twice yearly board meetings. The internal advisory board at NYU consists of officials at the highest levels, and these representatives play an especially active role. 

Databrary is designed in the context of researchers, not as an isolated project initiated by the library or the central IT dept. The project team seeks out partnerships with individuals and entities that offer data or expertise. By engaging a community of researchers, Databrary has learned to try to reduce the many barriers that make data sharing difficult for researchers. That includes the development of policies to enable sharing of identifiable data, the creation of technical infrastructure that implements secure sharing, easy citation of data and related materials, and the adoption of practices that encourage researchers to share what, with whom, and when they are most comfortable.  In encouraging researchers to contribute data and become actively involveed in a community of sharing, we have learned about the diverse curation requirements of datasets collected through very different lab processes, especially how to represent those datasets in a standard fashion for future access and re-use.  

## Next Steps

The Databrary team continues to build upon the lessons learned during the project's design and initial roll-out. Priorities for the next several years include expanding the number and diversity of datasets, enhancing features beyond storage and preservation, improving active/self-curation capabilities, more extensive integration with other services, and planning for long-term sustainability.

### Expand number and diversity of datasets

At present, the materials stored in Databrary represent a relatively small number of research topics from a subset of investigators who already have on hand archival materials with suitable permissions that permit widespread sharing. With increasing numbers of researchers beginning to adapt research protocols to enable video data sharing following the Databrary access model, we anticipate that the number and diversity of datasets will grow. The team has also identified a use case for Databrary materials that may accelerate the pace of contributions -- excerpts or clips for teaching. Many developmental scientists already use excerpts to illustrate methods or key phenomena, and researchers widely share excerpts with one another on an informal ad hoc basis. Databrary has begun to seek out contributions of these sorts of materials as a way to broaden the base of materials for viewing and to create a way for more researchers to contribute. In a similar vein, Databrary encourages researchers who use computer-based displays in their work to share sample displays. In this case, no research ethics questions stand in the way of sharing. These additional use cases -- teaching and demonstrating methods or displays -- show the value of building a repository infrastructure focused on video. 

Beyond these initiatives, Databrary plans to expand the scope of the library to encompass other scholarly domains. Scholars in other fields of social, behavioral, and learning science -- education, cognitive and social psychology, sport science and kinesiology, ethology, anthropology, linguistics, communication sciences, and political science -- use video. Databrary staff continue to cultivate partnerships with individual researchers and with professional societies representing new fields that employ video. We find that conversations with researchers in domains illustrate differences in curation and data management practices in different fields. As a result, staff continue to document and refine Databrary's curation processes in consultation with library and data services staff who have expertise in collection development and dataset profiles.

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

For the time being, Databrary does not charge users for storage or curation services. Those costs are borne by the NSF and NICHD project grants. Sustaining domain specific research data repositories on project-specific grants is common, but the model is not ideal. Databrary is part of a consortium of domain specific repositories led by ICPSR that has called for new, more sustainable funding models (http://datacommunity.icpsr.umich.edu/sites/default/files/WhitePaper_ICPSR_SDRDD_121113.pdf). In the meantime, the project team continues to develop plans for long-term sustainability of Databrary, with focus on the ArXiv (arxiv.org) and ICSPR institutional subscription models, storage volume/curation load based fees-for-service, and professional society partnerships.

## Conclusion

there is an active discussion amongst library practitioners of the role of libraries in the collecting and management of research data, Databrary offers a model that suggests that research data repositories could benefit from working more closely to the actual research it houses data for, while also being strategically and structurally attached to Library systems through management and staff as well as through technology integrations.

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

- Sharing with restricted community of researchers
    + Datasets linked to publications
        * Citations
        * Excerpts
        * Other research materials
        * Raw data
    + Cross-referencing among datasets, published papers/studies
    + Expose as much metadata as possible
    + Restricted access helps with data privacy/security concerns, but may slow adoption (see below).


Concealing participants’ identity (e.g., by pixilation or blocking faces) would limit the utility of the data. 

As of January 2015, it hosts 5700 video files totaling 1600 hours of recordings along with 2200 additional files. These files comprise 2400 sessions and are covered by 1300 records (including 1100 individual participants). 

In developing the project team and Advisory Board, Databrary's leaders specifically sought out a diverse array of expertise- Databrary is designed to work more closely with researchers (i.e."designed in the context of researchers").
- Community outreach/training, hands-on support.
- Meeting researchers more than half-way.
- Bringing expertise from library/information science to the research enterprise at an early stage (research informationists).
- Approach is working
    - 70+ users in first year, 35 contributors, X files


Lit Review Bullet points:

- Papers that discuss existing data repositories
    + Domain-general vs. domain specific
- Papers that discuss theory or practice of librarianship around data repositories
    + If we build it, will they come vs. If we build it, how will we handle the responsibility (staff, resources, how much can we help)? 
- Papers that discuss funding and institutional models for supporting research data repositories

