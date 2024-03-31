CREATE TABLE [dbo].[BeanVariety] (
    [Id]     INT           IDENTITY (1, 1) NOT NULL,
    [Name]   VARCHAR (50)  NOT NULL,
    [Region] VARCHAR (255) NOT NULL,
    [Notes]  TEXT          NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

