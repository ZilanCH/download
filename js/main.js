class DownloadLinkManager {
  constructor(listElement) {
    this.listElement = listElement;
  }

  async loadFromJson() {
    try {
      const response = await fetch("data/files.json");
      if (!response.ok) throw new Error("Fehler beim Laden der Datei-Liste");
      const files = await response.json();

      this.updateDisplay(files);
    } catch (e) {
      this.listElement.innerHTML = "<p style='color:red'>Fehler: " + e.message + "</p>";
    }
  }

  updateDisplay(files) {
  if (!files || files.length === 0) {
    this.listElement.innerHTML = "<p>Keine Dateien gefunden.</p>";
    return;
  }

  // Sort with external function
  files = sortFiles(files);

  this.listElement.innerHTML = files.map(file => {
    const tagColors = {
      "Dev": "red",
      "Zilan": "blue",
      "Extern": "green"
    };
    const tagColor = tagColors[file.tag] || "gray";

    return `
      <div class="link-item">
        <div class="link-header">
          <div class="link-title">📄 ${file.name}</div>
          <span class="file-tag" style="color:${tagColor}; margin-right:25px">${file.tag}</span>
          <div class="link-actions">
            <a class="btn" href="data/${file.url}" download>⬇️ Download</a>
          </div>
        </div>
        <div class="download-url">
          <strong>Download-URL:</strong><br>
          zilanch.github.io/download/data/${file.url}
        </div>
      </div>
    `;
  }).join('');
}

}

const manager = new DownloadLinkManager(document.getElementById("linksList"));
manager.loadFromJson();