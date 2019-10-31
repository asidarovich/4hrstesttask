/* global browser, describe, it, expect, beforeEach, customDownloadFolder */
import FilesHelper from '../helpers/filesHelper'
import DownloadsPage from '../pages/downloads.page';
import DownloadSoftwareVersionPage from '../pages/download.software.version.page';
import GDPRModule from '../pages/gdpr.module';

let testData = {
  software: [
    { name: 'Office 365', version: '' },
    { name: 'SharePoint 2019', version: '' },
    { name: 'SharePoint 2013', version: '' },
    { name: 'SharePoint 2016', version: '' }
  ],
  fileExtension: '.zip',
};

describe('user downloads and verifies all ShortPoint packages', () => {
  beforeEach(() => {
    DownloadsPage.open();
  });

  it('user is able to open Downloads page', () => {
    const title = browser.getTitle();
    expect(title).to.equal(DownloadsPage.getPageTitle());
  });

  it('user should be able to see versions for each software', () => {
    const currentVersions = DownloadsPage.getCurrentVersions();
    testData.software[0].version =
    testData.software[1].version = currentVersions.version1;
    testData.software[2].version =
    testData.software[3].version = currentVersions.version2;
  });

  testData.software.forEach((data) => {
    it(`downloaded file name for ${data.name} should contain appropriate version`, () => {
      GDPRModule.acceptGDPRPolicy();
      DownloadsPage.downloadSoftwareLinkFor(data.name).click();
      FilesHelper.createFolder(customDownloadFolder);
      FilesHelper.emptyFolder(customDownloadFolder);
      DownloadSoftwareVersionPage.downloadButton.click();
      browser.waitUntil(() => {
        let downloadsFiles = FilesHelper.getFolderFilesList(customDownloadFolder);
        return downloadsFiles.length === 1 && downloadsFiles[0].includes(testData.fileExtension);
      }, 10000);
      const file = FilesHelper.getFolderFilesList(customDownloadFolder)[0];
      FilesHelper.emptyFolder(customDownloadFolder);
      expect(file).to.include(data.version);
    });
  })
});
