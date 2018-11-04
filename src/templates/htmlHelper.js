export const bodyHtml = '<!DOCTYPE html><body><dl class="Menu">'
+ '<dt class="Menu-section">Section 1</dt><dd class="Menu-panel"><p>Section 1 Content...</p></dd>'
+ '<dt class="Menu-section">Section 2</dt><dd class="Menu-panel"><p>Section 2 Content...</p></dd> '
+ '<dt class="Menu-section">Section 3</dt><dd class="Menu-panel"><p>Section 3 Content...</p></dd></dl></body>';
export const expectedHtml = '<dt class="Menu-section">Section 1</dt><dd class="Menu-panel"><p>Section 1 Content...</p></dd>'
+ '<dt class="Menu-section">Section 2</dt><dd class="Menu-panel"><p>Section 2 Content...</p></dd> '
+ '<dt class="Menu-section">Section 3</dt><dd class="Menu-panel"><p>Section 3 Content...</p></dd>'
+ '<dt class="Menu-section">Section 4 with ajax</dt><dd class="Menu-panel"><p>test</p></dd>';
