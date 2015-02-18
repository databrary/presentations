# Databrary: A digital data library for storing and sharing research video

## Andrew Gordon, Lisa Steiger, David S. Millman, Rick O. Gilmore

## Abstract

## Introduction

Databrary (<http://databrary.org>), is a digital data library specialized for storing and sharing videos collected as raw data in the context of research about human and animal behavior. The project has financial support from the National Science Foundation (BCS-1238599) and the National Institute of Child Health and Human Development (U01-HD-076595). New York University (NYU) hosts the library and its staff, with additional support from The Pennsylvania State University (PSU). Databrary began sharing video data in 2014, so the project remains in the early stages of operation. Sharing personally identifiable research materials like video recordings has posed significant challenges along a number of dimensions. In meeting these challenges, Databrary has engaged a wide range of expertise, including substantial support from experts in the NYU Library and project staff with training in library and information science. As such, we think the project offers insights about ways libraries and librarians may engage with scholars in specific topical domains in order to serve emerging demands for sharing research data.

In this paper, we will discuss how Databrary is similar to and differs from existing data repositories. We will describe the project's origins and rationale and motivate the focus on a specific research field (developmental science) and particular data type (recordings, especially video). The storage and sharing of identifiable recordings poses a variety of challenges. We will describe Databrary's solutions to many of them, including the development of policies and procedures to enable the sharing of identifiable data and curation practices and technologies customized for a particular research community. Finally, in laying out a roadmap for enhancements and extensions of Databrary, we will discuss our views about what lessons library and information scientists might draw from the Databrary experience. We hope to demonstrate that information professionals have important roles to play in partnership with researchers in many scholarly domains.

## Literature Review

- Papers that discuss existing data repositories
    + Domain-general vs. domain specific
- Papers that discuss theory or practice of librarianship around data repositories
    + If we build it, will they come vs. If we build it, how will we handle the responsibility (staff, resources, how much can we help)?

<!-- Would it be safe to assume a paragraph of review per each main point we discuss regarding Databrary below(i.e. scope of repository, position of repository, representational model for repository, practical concerns (IRB, privacy, else...))? --> 

<!-- Repositories big and small (in scope, not in size) -->
The current literature on data repositories and data curation focus primarily on the libraries role in providing research data management services for their University community <cite, cite, cite>. On the whole, these discussions focus on the collecting, cataloging, and making available heterogenous datasets from across domains and specializations <cite, cite, cite>. Though there is a considerable body of literature that also discusses domain specific research data repositories <cite, cite, cite>. Often, the former sit within or emerge from within the library. For the latter, (read up on this...how do these types connect to the library?).

<!-- New practices for library staff - communication -->
Amongst the research and practice around research data and the library, the discussion focuses on the emerging role of librarians with domain expertise aimed at the research data they aspire to collect as well as the evolving roles librarians need to take in communicating the importance and specific practices in organizing and managing data, as well as taking on roles as curators of digital data. The goal of these new roles and responsibilities aim at lessening or eliminating the barriers to sharing as well as helping other researchers find and reuse the data being added to repositories. 

<!-- New requirements for metadata creation and building metadata for digital data objects -->
Accompanying the discussion on new roles is a more more low level and technical assessment of the basic requirements for identifying and representing digital datasets<cite, cite, cite>. The questions of what is a dataset and how do we best identify any number of them in a consistent way for preservation and accessibility vary depending on how broadly or narrowly we define the domain around which a repository is built. 

<!-- Overview/Tieing together and prelude to rest of paper --> 
Within these intersecting discussions, we note that there is a tension between breadth and depth in collecting and preservering research data, as well as challenges and new skills for repository and library staff to learn in communicating and working with researchers around collecting their data. The latter includes anticipating their needs, mediating burdens and hardships to their participation, and enusuring the quality and provenance of their data. A lot of these concerns fall from the instutitional position of the repository and to what extent and how they include the input of researchers, research data librarians, technology support, and other stakeholders.

Finally, we understand that the specific features and virtues of a repository will come down to the community they serve, the available staff and resources available to handle not only incorporation of data but the precluding communication and exchange between researchers and repository owners, and peculiarities of the types and formats of data the repository stores.


## Databrary Project Model

### Project Origins and Rationale (Rick)

- Data sharing a growing focus within research community and with research funding agencies.
    + Libraries already house other products of scholarly activity such as journal articles and books, but the raw materials behind published research remains unavailable in most cases.
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
- Novel approach
    - We have taken a new approach to supporting research data, as evidenced by the organization of our own leadership, the charge from our funding agencies.
    - Our repository is designed in the context of researchers, not as an isolated project initiated by either the library or the central IT dept
    - Cf. the Northwestern Survey and also the new NYU survey of peer research repositories (I have more on this).  We build on others' work and take a holistic approach wherever possible.
    - Through the development of Databrary and engaging a community of researchers to get their data and their active involvement in a community of sharing (and practice), we have learned a lot so far about the curation needs involved working with datasets that came together through very different lab processes as well as how to represent those datasets in a standard fashion, for future access and re-use.
    - Where there is an active discussion amongst library practitioners of the role of libraries in the collecting and management of research data, Databrary offers a model that suggests that research data repositories could benefit from working more closely to the actual research it houses data for, while also being strategically and structurally attached to Library systems through management and staff as well as through technology integrations.

### The technical details (Drew)

The Databrary web application is open-source and built in Scala on the Play Framework to support a responsive user interface, a complete API, and high-performance streaming. The user interface is built primarily on the Angular web framework, and all data access is performed through an open JSON API.

As part of the curation process, Databrary stores at least two versions of each item of Databrary video content: a copy for access, and the received original file if it was digital, or a 10-bit YUV digital preservation copy if the original version was not digital. Currently, the access version format is H.264 (HiP) with AAC audio in an MPEG-4 container, although we expect the appropriate video formats to change over time, as has been the case with many digital video formats in
recent years.

For preservation, the original file (if digital) or the preservation copy will be stored in a long-term preservation repository managed jointly by the NYU Libraries and the central Information Technology Services unit. This repository ensures that each content item has a METS structural metadata file that associates the digital asset with its metadata. It stores files in two mirrored and geographically distributed
locations, and a third copy on offsite tape; it performs regular fixity checks; and it provides a format migration capacity, in the event that astored format becomes at risk of obsolescence.

### Enticing Contributors: Data Privacy and Community Outreach (Rick? Drew?)

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

Databrary supports both after the fact and active curation. After the fact curation consists of ingesting datasets after collection has been completed and largely after all study derivatives (research papers, analyses, etc.) have been created. Active curation refers to the "Upload As You Go" feature of Databrary, a user interface built into the web application that guides researchers through uploading their video data and attaching metadata as they conduct their study. 

We learned early on that a minimal amount of metadata for finding and reusing datasets was preferable to exhaustive descriptions of data. The latter burdens researches, reducing their incentive to participate. The end result of both available curation processes is a system that defines and supports a minimum requirement for metadata to standardize representation of datasets while facilitatin discovey and sharing, while allowing researchers and staff to add additional metadata where time and resources permit. The two different curation methods are described in more detail below.

#### After-the-fact/archival curation 

The challenge that any data repository will face, regardless of size and scope, is how to define a schema that will accept a wide variety of datasets, while adding a level of standardization that allows them to be easily searched and acted upon (FRBR - Saatchi & Hourcle).

- Curation process (librarians outside of the library, how to gather and standardize metadata, handling many types of data, from in the process of gathering to archival materials gathered decades ago).

#### Active curation

- Curate data while it is being collected.
    + New in developmental science.
    + Builds on existing common practices.
- Differs from institutional repositories because of focus on a particular research field.
- Serves as the foundation of search and discoverability
- Spreadsheet interface, metadata capture
- Annotations add additional metadata for discoverability


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

