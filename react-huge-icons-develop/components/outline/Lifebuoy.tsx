import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLifebuoy = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M13.874 9.066a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM19.33 5.73a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM4.67 18.27a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm5.456-3.335a.75.75 0 0 0-1.06-1.061l1.06 1.06Zm4.809-1.061a.75.75 0 0 0-1.061 1.06l1.06-1.06Zm3.335 5.456a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM5.73 4.67a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm3.335 5.456a.75.75 0 0 0 1.061-1.06l-1.06 1.06ZM8.6 4.25h6.8v-1.5H8.6v1.5ZM19.75 8.6v6.8h1.5V8.6h-1.5ZM15.4 19.75H8.6v1.5h6.8v-1.5ZM4.25 15.4V8.6h-1.5v6.8h1.5Zm4.35 4.35a4.35 4.35 0 0 1-4.35-4.35h-1.5a5.85 5.85 0 0 0 5.85 5.85v-1.5Zm11.15-4.35a4.35 4.35 0 0 1-4.35 4.35v1.5a5.85 5.85 0 0 0 5.85-5.85h-1.5ZM15.4 4.25a4.35 4.35 0 0 1 4.35 4.35h1.5a5.85 5.85 0 0 0-5.85-5.85v1.5Zm-6.8-1.5A5.85 5.85 0 0 0 2.75 8.6h1.5A4.35 4.35 0 0 1 8.6 4.25v-1.5ZM14.65 12A2.65 2.65 0 0 1 12 14.65v1.5A4.15 4.15 0 0 0 16.15 12h-1.5ZM12 14.65A2.65 2.65 0 0 1 9.35 12h-1.5A4.15 4.15 0 0 0 12 16.15v-1.5ZM9.35 12A2.65 2.65 0 0 1 12 9.35v-1.5A4.15 4.15 0 0 0 7.85 12h1.5ZM12 9.35A2.65 2.65 0 0 1 14.65 12h1.5A4.15 4.15 0 0 0 12 7.85v1.5Zm2.934.776L19.33 5.73l-1.06-1.06-4.396 4.396 1.06 1.06ZM5.73 19.33l4.396-4.395-1.06-1.061L4.67 18.27l1.06 1.06Zm8.144-4.395 4.396 4.395 1.06-1.06-4.395-4.396-1.061 1.06ZM4.67 5.73l4.396 4.396 1.06-1.06L5.73 4.67 4.67 5.73Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLifebuoy);
export default ForwardRef;
