CREATE TABLE [dbo].[Coffee] (
    [Id]            INT          IDENTITY (1, 1) NOT NULL,
    [Title]         VARCHAR (50) NOT NULL,
    [BeanVarietyId] INT          NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Coffee_BeanVariety] FOREIGN KEY ([BeanVarietyId]) REFERENCES [dbo].[BeanVariety] ([Id])
);

