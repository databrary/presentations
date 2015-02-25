# Researcher-library collaborations: Data repositories as a service for researchers

## Andrew Gordon, Lisa Steiger, David S. Millman, Rick O. Gilmore

## Abstract

Libraries have long provided a home for a diverse range of scholarly products, but new interest has arisen in organizing, preserving, and sharing the raw materials -- the data and metadata -- that undergird the published products of research.
Library and information science professionals have valuable expertise to bring to bear in the effort to create larger, more diverse, and more widely used data libraries.
However, for libraries to be maximally successful in providing the research data management and preservation services required of a successful data repository, librarians must work especially closely with researchers and embed themselves in data management workflows as much as possible.
The Databrary project provides a model for how library and information science experts, working in a diverse team, can inform the development and implementation of a data repository that is closely linked to the needs of a specific research community.
In Databrary's case, the target scholarly community represents researchers who use video as a main source of data to study human development and learning.
Storing and sharing video poses policy and technical challenges that Databrary staff have solved in ways that may prove informative to the library and information science community.

## Background 

Databrary (<http://databrary.org>), is a library specialized for storing and sharing videos collected as raw data in the context of research about human development and learning.
The project has financial support from the National Science Foundation (BCS-1238599) and the National Institute of Child Health and Human Development (U01-HD-076595).
New York University (NYU) hosts the library and its staff, with additional support from The Pennsylvania State University (PSU).
Databrary began accepting contributions in early 2014 and opened for general use in October 2014.
In less than a year of operation, the number of institutions with authorized users had grown to 40, with 79 individual investigators from North America, Europe, South America, and Australia.
As of March 2015, 35 individual contributors representing 25 different universities had contributed video data or excerpts.

Sharing personally identifiable research materials like video recordings has posed significant challenges.
In meeting these challenges, Databrary has engaged a wide range of expertise, including experts in the NYU Library and project staff with training in library and information science.
As such, the Databrary project offers insights about ways libraries and librarians may engage with scholars in specific topical domains in order to serve emerging demands for sharing research data.

In some fields, such as the Earth and space sciences or high energy physics, open data sharing has been a longstanding norm (e.g., DataONE, Virtual Observatory, Hubble, etc.).
Federal agencies that fund behavioral research have implemented data management planning and sharing requirements for applicants, but ethical and technical barriers to sharing sensitive data about human participants have made open data sharing uncommon in the behavioral sciences [CITE?].
These problems grow when infants, children, or adolescents are the focus of study and when video provides a primary stream of research data.
Both features characterize research in developmental science.

While personally identifying information can be removed from text-based data, videos may contain faces, voices, names spoken aloud, and sometimes views of the homes of research participants.
These cannot be removed without reducing the information content.
Further, the collection of video or other identifiable or sensitive information requires approval by a research ethics board and informed consent from the participants.
The consent process formalizes a promise by the research team that a participant's identity will not be disclosed.
Thus, researchers risk violating participants’ privacy if digital images are viewed or released to others without authorization.

At the same time, video has significant potential for re-use.
Video uniquely captures the complexity and richness of behavior.
Accordingly, videos recorded in one experimental setting for one purpose may often be used by other investigators for other purposes.
As such, there is a high incentive for sharing this format and type of research data, but it does not come without its own specific barriers to getting researcher buy-in and trust that their data will be treated with the proper sensitivities once it is placed in the context of a shared data repository. It is with close communication and expertise in handling information that we argue as the core reasons why Databrary has seen success in its early stages.

Databrary is designed in the context of researchers, not as an isolated project initiated by the library or the central IT dept.
By engaging a community of researchers, Databrary has learned to try to reduce the many barriers that make data sharing difficult for researchers.
That includes the development of policies to enable sharing of identifiable data, the creation of technical infrastructure that implements secure sharing, easy citation of data and related materials, and the adoption of practices that encourage researchers to share what, with whom, and when they are most comfortable.
In encouraging researchers to contribute data and become actively involveed in a community of sharing, we have learned about the diverse curation requirements of datasets collected through very different lab processes, especially how to represent those datasets in a standard fashion for future access and re-use.

In this paper, we will discuss how Databrary has a established itself as a data repository that has the unique position of working closely and frequently with researchers.
The storage and sharing of identifiable recordings poses a variety of challenges.
We will describe Databrary's solutions to many of them vis-a-vis close interaction with our intended community of users and contributors. This includes the development of policies and procedures to enable the sharing of identifiable data as well as curation practices and technologies customized for the target research community.
Finally, in laying out a roadmap for enhancements and extensions of Databrary, we will discuss our views about what lessons library and information scientists might draw from the Databrary experience.
We demonstrate that information professionals have important roles to play in partnership with researchers in many scholarly domains.


## Literature Review

Databrary is a domain-specific data repository with strong ties to NYU library, but largely autonomous operations.
A sampling of the current literature on data repositories and data curation shows that these features fall well within established repository norms.
Some repositories capture research data across domains (Lyle 2014, Witt 2012), while others commit to a specific field of study (Peer & Green 2012, Ardini et al.
2013).
There are a number of challenges inherent in creating and running a research data repository, but how repositories are established institutionally and how they interface with researchers and content producers turn out to be critical.

Collaborations between libraries and research entities are common.
Witt (2012) discusses the collaboration between Purdue Library Systems and Information Technology at Purdue (ITaP).
The Inter-university Consortium for Political and Social Research (ICPSR), as discussed in Lyle (2014), emerged from the Institute for Social Research at the University of Michigan to encompass a consortium of institutional partners.
An open data repository for the social sciences at Yale (Peer & Green, 2012) represents a collaboration between Yale’s Office of Digital Assets and Infrastructure (ODAI) and the Institution for Social and Policy Studies (ISPS).
However, the literature provides little detail about how these sorts of collaborations emerge or about which collaborators take the initiative.

In contrast, the literature on library practices and resposibilities describes how new policies and practices around communication with the scientific community have been critical to the success of some data respositories.
Purdue's Data Curation Center (DCC), for example, has developed a process for interviewing researchers about their data curation needs in contributing to data repositories; library staff need to understand how to conduct these interviews (Carlson, 2012).
Carlson (2012) finds that without the right kind of communication with researchers, "services that do not align with real-world needs of researchers will not be used."
Librarians, with their strengths in metadata creation and standardization across domains, can help reduce the barriers to sharing that often plague the dissemination of data, particularly where research cultures differ drastically across domains (MacMillian, 2014).
Not only does a librarian working with researchers help in building a better repository, but a librarian whose role is embedded in and informed by working with researchers can ensure better material description and documentation.
This results in more productive research outcomes (Federer 2012).
Some predict that the role of liaison librarians in data repository building will increase: Researchers will welcome assistance in reducing the burden of describing and preparing data for preservation, and this will convince more researchers to contribute data (McClure et al., 2014).

New practices for managing workflows involving technology and metadata creation will be needed in the development of successful data repositories.
Research data differ from other products of research such as journal articles and books.
From this, important questions arise.
How should libraries represent a dataset in a manner that allows it to be cataloged, preserved, and cited (Wickett et al., 2012)? Representing research data outside of its original context risks making the data more difficult to interpret (Borgman 2012).
Also, can libraries meet the needs of researchers who are increasingly held responsible for documenting and sharing the raw data from their research along with its products and derivatives (Heidorn, 2011; Greenberg et al., 2009)? Propagating research data is fast becoming a core component of scientific communication, but a bridge between researchers and repository staff must be built to facilitate that propagation (Castelli, Manghi, & Thanos, 2013).
A survey of repository staff workers in Australia and New Zealand found that building digital data repositories will require library workers to develop new skills related to the software driving these repositories and skills to communicate with IT departments (Simons & Richardson, 2012).
Library staff will also need to develop working knowledge about semantic web-based metadata schema like RDF, multimedia file formats, and access concerns like copyright legislation and open access standards (Simons & Richardson, 2012).
The Databrary project team's experience echos many of these points.

## Description of services

With respect to garnering researcher trust and willingness to contribute, Databrary's core compentencies are: a focus on community outreach, attention to data privacy, the provision of services for scholarly communication, services for guided and active data curation developed with the guidance of information professionals, support from institutional partners, and a strong technical infrastructure.

### Community Outreach and Scholarly Communication

Connecting with the research community in a meaningful way, with staff who understand both the professional needs of researchers and the requirements for preserving and facilitating access to information, has been a fundamental mission for this project.
In developing Databrary, the project team came to understand that researchers were more likely to want to share video data with colleagues who were part of the same scholarly community and shared the same understanding about the sensitivities involved in sharing identifiable data related to children and their families.
At the same time, the team understood that it would have to change prevailing sentiments in the developmental science community about the feasbility of sharing video data openly.
Indeed, one of the original funding proposals' specific aims involved changing the culture of research around video data sharing.
This led to a decision to hire a staff member with specific responsibilities for community outreach and to the hiring of a staff member with experience in library and information science.
These team members interact directly with researchers to provide hands-on support at every stage of the researcher's interactions with Databrary.
Staff assist with initial registration and consultation with research ethics boards and with planning for archival or new data curation (see Curation below).
The Databrary team actively seeks out new potential contributors and datasets, and the team has established partnerships with some of the main scholarly associations in the developmental and learning sciences: the Society for Research in Child Development (SRCD), the International Society on Infant Studies (ISIS), the Cognitive Development Society (CDS), and the American Educational Research Association (AERA).

Databrary has also attempted to forge a consensus on professional values concerning the questions of what materials to share, when in the research life cycle should materials be shared, who should share, and how one should acknowledge the use of shared data and other materials.
A Data Sharing Manifesto (http://databrary.org/access/policies/data-sharing-manifesto.html) articulates the project's philosophy.
It suggests that *all* researchers should share as much material as they are comfortable sharing and have permission to share; researchers should share as early on in the research life cycle as possible; and researchers should properly acknowledge all materials contributed by others that inform their research products.
To that end, Databrary provides valid uniform resource identifiers (URIs) in a standard format for datasets as a whole and for subcomponents within them, links to persistent identifiers for publications associated with a dataset, and persistent identifiers (DOIs) for datasets hosted on Databrary.
Library and information science experts have been instrumental in shaping the design and implementation of these features.

Finally, through close communication with researchers concerns about sharing data, we found data privacy to be a crucial element for ensuring that contributors trust where their data will be stored.
Sharing identifiable research data requires that the Databrary system restrict access to materials on the basis of both the permissions granted by individual participants and on the level of sharing a researcher has granted.
Databrary offers several levels of permissions, allowing researchers to share data only with their own lab, or with other authorized Databrary researchers, or in bi-lateral relationships with specific individual Databrary users, or in limited excerpts to the public.
Because of this, Databrary staff work closely with data contributors to determine how a datasets original distribution restrictions (e.g. though IRB) translate to Databrary's access levels. As such, privacy becomes a significant component in the curation process.


### Institutional Positioning

Databrary relies on several collaborations and partnerships within the University. Through this particulary configuration, we believe Databrary is more capable of navigating swiftly between the University Library and the community of researchers not only on campus but at institutions domesitcally and internationally.
Its technical architecture is based on a hybrid model, developed initially by the NYU Libraries together with the central IT organization, such that the Databrary web application uses central IT servers and storage.
The Libraries and central IT, in turn, guarantee the preservation of Databrary collections indefinitely, even if the project funding is interrupted.
This partnership requires that Databrary follow digitial preservation best practices, described further below.
This model is new for the Libraries and central IT, and represents a desired direction for enhanced central support for research data repositories across the University.

Another significant partnership has been with the Office of Sponsored Programs.
Normally, this office does not work substantively with projects once their funding has been received.
However, in the case of the Databrary project, this office has been an engaged participant, developing new policies and acting as a model university Authorized Organization Representative, a role that is critical in the legal and policy framework for sharing between institutions.
Similarly the General Counsel's office, ordinarily a strictly administrative office that challenges or defends legal issues, has also been engaged to develop the legal and policy framework for inter-institutional sharing.

By bringing together and creating collaborations among these various administrative offices in new ways, Databrary has effected research into these university administrative processes themselves.
These relationships were envisioned from the start, with the collaborating units participating in conversations even before proposal writing began.

Inter-institutional sharing is enabled by a document called the Databrary Access Agreement (http://databrary.org/access/policies/agreement.html).
This agreement is signed by a university officer with authority to affirm the enforcement of research practices on behalf of their institution.
This is typically the director of an Office of Sponsored Programs.
Individual researchers at that institution may then be authorized by that officer to access and share data using Databrary.
Researchers agree to treat data from Databrary with the same standards of research ethics that would apply to data they collect themselves, and to respect the desired release preferences of people depicted in data they contribute to Databrary.

### Curation

Databrary supports after-the-fact and active curation.
After-the-fact curation consists of ingesting datasets after collection has been completed, typically after all study derivatives (research papers, analyses, etc.) have been created.
Active curation refers to Databrary's user interface that allows researchers to upload their video data and metadata as they collect it during the course of a study.

Every data repository faces the problem of defining a metadata schema that will accept a wide variety of datasets, while adding a level of standardization that allows deposits to be easily searched (Hourclé 2008, Orchard 2012).
The Databrary team learned early on that requiring only a minimal amount of metadata was preferable to making mandatory exhaustive descriptions of data.
The latter burdens researchers, reducing their incentive to participate.
As a result, we have created a system that defines minimum requirements for metadata, but supports the addition of information beyond that minimum, after a dataset has been deposited.
This approach standardizes the internal representation of datasets from the outset while facilitating discovery and sharing.


#### After-the-fact/archival curation 

Communication with researchers remains a key component in the curation of archival data.
Databrary staff with expertise in library and information science discuss datasets with researchers planning on making contributions from the earliest steps in the process.
Regular communication with researchers helps the Databrary staff understand how target contributors envision the representation of their data inside the repository.
The discussions also inform the ongoing development of the metadata schema, ensuring that it continues to meet the diverse needs of a wide range of individual labs.

Most data eligible for after-the-fact curation was gathered under a different set of participant consents and research ethics board (e.g., IRB) permissions than those now recommended by Databrary.
So, communication between Databrary staff and the researcher helps forge a mutual understanding about how to interpret pre-existing restrictions on the data in a way compatible with Databrary's policies.
Indeed, access restrictions are themselves essential metadata.
Because access restrictions apply to the study level, session, and individual file levels, gathering these metadata constitutes a non-trivial curation effort.
However, the problems enountered with and solved in curating each new dataset informs the process of curating new contributions.
Finally, collaboration between embedded library staff and staff familiar with the practices and interpretation of data within a the content domain helps ensure that the data ingested is well-organized and of the highest quality.


Once a dataset has been approved for ingesting and the contributor has been authorized for access, staff begin the process of gathering, organizing, and preparing the data.
Occasionally, staff will review data for personal information Databrary does not wish to upload, such as residential addresses or social security number.
In the case of older video collections, where relevant metadata may have been lost or not documented to begin with, staff also review videos for any relevant metadata related to participant tasks or conditions.
In these circumstances, it helps to have staff with expertise in library science and in behavioral science work side by side.

Finally, once all the metadata has been organized into a set of comma-separated value (CSV) files, and video files have been uploaded to a staging server for ingest, a set of server scripts merge the metadata into a JSON file which is then uploaded via the web application.
This initiates the uploading of the video assets, the creation of research sessions and records, and video transcoding into to a standard format.
Once data have been uploaded, videos are clipped, as needed, to remove identifying information, and the results stored on the long-term preservation location within NYU's ITS data centers.

#### Active curation

After-collection data curation has a central drawback of being resource intensive.
Databrary staff learned early on that many researchers balk at the prospect of preparing data for sharing once a study has ended.
Unless a particular publication outlet or funding agency requires it, there are few incentives for after-the-fact curation.
Additionally, Databrary's founders envisioned the site as more than a passive repository, but an active community where research data is commented on, excerpted, cited, modified, and reused.
Realizing this vision meant that Databrary needed to provide tools that would assist contributors in managing and preserving research data from early on in the research life cycle.
In order to be useful, data management through Databrary would have to reflect what we observed to be some of the common practices undertaken in collecting and keeping track of data through its lifecycle.


The result is a set of data management features available in Databrary's user interface that empower researchers to *actively curate* their own projects -- upload data with accompanying metadata -- as each study unfolds.
We have designed and implemented a spreadsheet interface for entering, editing, and viewing session-level metadata (e.g.
participants, conditions of study, tasks in the experiment, session access levels, study groups etc.) and a timeline for uploading, viewing, and tagging video assets related to sessions.
The timeline view is designed to look and operate like video editing software.
It allows users to upload and position video files along the time line reflecting the temporal nature of the data collection and to annotate video sections with user-generated tags.
These metadata become additional indices for search and discovery.
These features emerged from ongoing discussions with Databrary users and potential users, and we are actively refining them on the basis of user feedback.

[Screen shots since no page limit?]

Active curation distinguishes Databrary from most repositories.
The decision to make active curation a priority emerged from Databrary's focus on reducing the barriers to data sharing faced by its target research field.
The decision to create a spreadsheet interface that focuses on sessions derives from the fact that the observational session is a basic analytic unit of behavioral science (Bakeman & Quera 2012).
Employing a timeline for the display and management of video assets draws inspiration from desktop coding tools like Datayu, Mangold Interact, and Noldus Observer, which many researchers in developmental science use to code videos for behaviors of interest.
Accordingly, achieving a deep familiarity with the practices of researchers in the target domain enabled Databrary staff to create a representational model for their data that most researchers understand and a data management workflow similar to existing practices, but strengthened by being web-based.
Moreover, we anticipate that the use of a standard metadata tool will contribute to the harmonization of metadata tags and greater standardization of data management practices.
If it works as intended, active curation will reduce significant barriers to sharing, and as a result, it will accelerate the pace of contributions and the rate of growth in new investigators.

### Technical Infrastructure

Since many of the system requirements for Databrary were novel and specific to a particular target domain, the team opted to build a new application rather than adapt an existing tool.
The result is an open-source (http://github.com/databrary) web application built in Scala on the Play Framework to support a responsive user interface, a complete application program interface (API), and high-performance streaming.
The backend is a PostgresSQL relational database.
The user interface is built primarily on the AngularJS JavaScript framework, and all data access is performed through an open JSON API.


NYU Libraries have played a critical role in advising the development team about storage and computing technologies available within the NYU IT system, and in helping negotiate access to and cost-models for IT services.
As part of the curation process, Databrary stores at least two versions of each item of Databrary video content: a copy for access, and the received original file if it was digital, or a 10-bit YUV digital preservation copy if the original version was not digital.
Currently, the access version format is H.264 (HiP) with AAC audio in an MPEG-4 container, although we expect the appropriate video formats to change over time, as has been the case with many digital video formats in recent years.
The system uses NYU's high performance computing (HPC) cluster to transcode videos in the background using ffmpeg.

For preservation, the original file (if digital) or the preservation copy will be stored in a long-term preservation repository managed jointly by the NYU Libraries and the central Information Technology Services (ITS) unit.
This repository ensures that each content item has a METS structural metadata file that associates the digital asset with its metadata.
It stores files in two mirrored and geographically distributed locations, and a third copy on offsite tape; it performs regular fixity checks; and it provides a format migration capacity, in the event that a stored format becomes at-risk of obsolescence.
 

## Next Steps

The Databrary team continues to build upon the lessons learned during the project's design and initial roll-out.
Priorities for the next several years include expanding the number and diversity of datasets, enhancing features beyond storage and preservation, improving active/self-curation capabilities, more extensive integration with other services, and planning for long-term sustainability.

### Expand number and diversity of datasets

At present, the materials stored in Databrary represent a relatively small number of research topics from a subset of investigators who already have on hand archival materials with suitable permissions that permit widespread sharing.
With increasing numbers of researchers beginning to adapt research protocols to enable video data sharing following the Databrary access model, we anticipate that the number and diversity of datasets will grow.
The team has also identified a use case for Databrary materials that may accelerate the pace of contributions -- excerpts or clips for teaching.
Many developmental scientists already use excerpts to illustrate methods or key phenomena, and researchers widely share excerpts with one another on an informal ad hoc basis.
Databrary has begun to seek out contributions of these sorts of materials as a way to broaden the base of materials for viewing and to create a way for more researchers to contribute.
In a similar vein, Databrary encourages researchers who use computer-based displays in their work to share sample displays.
In this case, no research ethics questions stand in the way of sharing.
These additional use cases -- teaching and demonstrating methods or displays -- show the value of building a repository infrastructure focused on video.


Beyond these initiatives, Databrary plans to expand the scope of the library to encompass other scholarly domains.
Scholars in other fields of social, behavioral, and learning science -- education, cognitive and social psychology, sport science and kinesiology, ethology, anthropology, linguistics, communication sciences, and political science -- use video.
Databrary staff continue to cultivate partnerships with individual researchers and with professional societies representing new fields that employ video.
We find that conversations with researchers in domains illustrate differences in curation and data management practices in different fields.
As a result, staff continue to document and refine Databrary's curation processes in consultation with library and data services staff who have expertise in collection development and dataset profiles.

### Improve Active/Self-Curation

As the Databrary user community grows and requests from new institutions and labs for adding their data to Databrary increase, we recognize this as an opportunity to refine and codify our curation and collection development processes.
Additionaly, the more datasets we see, the more we can hone our metadata schema to more fully represent the datasets we bring into Databrary.In codifying our curation process, we look to the Data Curation Profiles Toolkit and similar inititives (McLure et al.
2014) to incorporate best practices for documenting and understanding the datasets that researchers in our target audience wish to contribute.
Additionally, while our user interface for active curation is still new, we plan to continue gathering feedback from users to improve the tools.
We aim to have Databrary represent how researchers themselves would want to represent their data to others, while maintaining a consistent and predictable structure that makes information useful and discoverable by others.

### Enhance Databrary's feature-set

With Databrary established as a working service that is actively gathering new data daily, we will now turn our attention to enhancing the system in ways that will help researchers better find and access Databrary's materials.
Allowing users to tag and annotate video segments is a natural next step.
While full-text search is becoming relatively trivial with off the shelf search engines like Apache Solr or Elasticsearch, the same cannot be said about video data.
Higher level descriptions of video data assist in finding content relevant to the user, though it is not as easy creating metadata that describes what content is in a video file, particularly on a frame-by-frame basis.
By extending the simple video tagging and annotation tools we have enabled on the user interface's timeline, we will allow the researchers themselves to add the metadata that will be useful for others to identify segments of video that are most interesting.
Similarly, we will enhance tools for researchers to create their own excerpts -- separate clips from larger video files -- that contain some salient event or example of a phenomenon.
Investigators may share excerpts with other scholars, and use them in the classroom and at conferences.
Excerpts also become a means within the repository for finding and selecting datasets that have some conceptual relationship.
Since many investigators who collect video do so in conjunction with other temporally dense data streams -- physiological measures (heart rate, brain activity), body motion, or gaze position -- we will explore ways to link Databrary's video assets to external repositories storing these measures, or where feasible, provide internal support for them.
Finally, we plan to incorporate ways to read and write files compatible with the most prevalent video coding/annotation tools used in the developmental science community.
This will allow researchers who use Mangold or Noldus to annotate videos to share with colleagues who use another tool.

### Integrate with other services

It is important to acknowledge, also, that we will need to improve our connection with existing library services (i.e.
the library catalog and any other aggregate searches over exising data repositories).
Going forward, we are well positioned to provide interoperability with library-based metadata schemas (such as export of data packages cross-walked to Dublin Core) and reach OAI-PMH compliance.
This will automatically incorporate data that researchers add to Databrary into federated library searches with other domain-specific data repositories.

Additionally, By providing a refined API and assigning Digital Object Identifiers (DOIs) to volumes, we can also allow libraries and other information systems to tap into Databrary datasets in a more automated fashion.
Minting DOIs for datasets in Databrary will also allow them to be more citeable in future journal articles.

### Plan for long-term sustainability

For the time being, Databrary does not charge users for storage or curation services.
Those costs are borne by the NSF and NICHD project grants.
Sustaining domain specific research data repositories on project-specific grants is common, but the model is not ideal.
Databrary is part of a consortium of domain specific repositories led by ICPSR that has called for new, more sustainable funding models (http://datacommunity.icpsr.umich.edu/sites/default/files/WhitePaper_ICPSR_SDRDD_121113.pdf).
In the meantime, the project team continues to develop plans for long-term sustainability of Databrary, with focus on the ArXiv (arxiv.org) and ICSPR institutional subscription models, storage volume/curation load based fees-for-service, and professional society partnerships.

## Conclusion

There is an active discussion amongst library practitioners of the role of libraries in the collecting and management of research data.
Databrary offers a working model that suggests that research data repositories could benefit from interacting more closely with the actual research community it houses data for.
Though it also demonstrates that being strategically and structurally attached to Library systems through management and staff as well as through technology integrations is also a key component to its ongoing success.

We do not assume that all data repositories will be able to replicate the exact process Databrary has undertook to develop.
Larger scale data repository projects that cross over many different fields of research most likely will not have the available staff to shadow every domain their datasets come from.
Though, as discussed in much of the existing literature, the development of data repositories will require the work of information professionals who are equipped with new skillsets that allow them to both translate the needs of the library to research teams as well as be prepared to negotiate the space wherein the repository, policy, and library workflows touch the work of researchers who may not have the time available or all the information necessary to deposit their data.







