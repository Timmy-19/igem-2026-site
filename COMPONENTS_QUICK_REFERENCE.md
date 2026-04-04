# iGEM Components Quick Reference

## 12 UI Components Created

All components are located in `/src/components/` and ready to use.

### Component Checklist

- [x] **StatusBadge** - Color-coded status indicators
- [x] **SummaryCard** - Dashboard statistics cards
- [x] **WorkstreamCard** - Team workstream cards with expandable sections
- [x] **TimelineRow** - Project timeline visualization
- [x] **OwnershipTable** - Sortable data table
- [x] **StudentTable** - Pre-configured student directory
- [x] **UpdateCard** - Weekly update cards
- [x] **SectionHeader** - Page section headers
- [x] **FilterBar** - Dropdown filter controls
- [x] **PageHeader** - Full-width page headers with breadcrumb
- [x] **Navbar** - Top navigation with mobile menu
- [x] **Layout** - Page layout wrapper

## Quick Import

```tsx
import {
  StatusBadge,
  SummaryCard,
  WorkstreamCard,
  TimelineRow,
  OwnershipTable,
  StudentTable,
  UpdateCard,
  SectionHeader,
  FilterBar,
  PageHeader,
  Navbar,
  Layout,
} from '@/components';
```

## Component Details

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| StatusBadge | Status indicators | `status`, `size?` |
| SummaryCard | Stats cards | `title`, `value`, `icon?`, `color?` |
| WorkstreamCard | Workstream display | `workstream` object |
| TimelineRow | Timeline visualization | `trackName`, `phases[]` |
| OwnershipTable | Generic table | `columns[]`, `data[]` |
| StudentTable | Student directory | `students[]` |
| UpdateCard | Update cards | `update` object |
| SectionHeader | Section headers | `title`, `subtitle?`, `description?` |
| FilterBar | Filter controls | `filters[]` |
| PageHeader | Page headers | `title`, `breadcrumb?` |
| Navbar | Navigation | `siteName?` |
| Layout | Page wrapper | `children` |

## Status Colors

- **Confirmed**: Green (Emerald)
- **In Progress**: Blue
- **Assigning**: Amber/Yellow
- **Not Yet Filled**: Gray (Slate)

## Design System

- **Primary Color**: Blue (#2563eb)
- **Secondary Color**: Emerald Green (#059669)
- **Accent Color**: Amber (#f59e0b)
- **Background**: Light Slate (#f8fafc)
- **Cards**: White (#ffffff)

## File Locations

All component files in: `/src/components/`

Documentation:
- `COMPONENT_GUIDE.md` - Detailed usage guide
- `EXAMPLE_USAGE.tsx` - Real-world examples
- `COMPONENTS_QUICK_REFERENCE.md` - This file

## Navigation Links (Navbar)

The Navbar includes links to:
1. Home
2. Project Overview
3. Roadmap
4. Workstreams
5. Ownership Dashboard
6. Weekly Updates
7. Team
8. Resources
9. Quick View

## TypeScript Support

All components have full TypeScript support with proper interface definitions. Full autocomplete available in your IDE.

## Responsive Design

- Mobile-first approach
- Mobile hamburger menu in Navbar
- Responsive grid layouts
- Touch-friendly interactive elements

## Dark/Light Mode Ready

Components use CSS custom properties for theming. Easy to extend for dark mode support.

---

**Total Components**: 12
**Total Code**: ~25.5 KB
**Framework**: React 19.2 + TypeScript + Tailwind CSS 4.2
