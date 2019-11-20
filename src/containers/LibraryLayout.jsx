import React from 'react';

import { LibrarySidebar } from '../components/LibrarySidebar';
import { LibraryContent}  from '../components/LibraryContent';

export const LibraryLayout = () => (
    <div className="library">
        <LibrarySidebar />
        <LibraryContent />
    </div>
)

