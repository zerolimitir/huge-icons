import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCartesian = (
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
            fillRule='evenodd'
            d='M10.25 2a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-.25v4H13a.75.75 0 0 1 0 1.5h-.25v3h3V11a.75.75 0 0 1 1.5 0v.25h4V11a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0v-.25h-4V13a.75.75 0 0 1-1.5 0v-.25h-3v3H13a.75.75 0 0 1 0 1.5h-.25v4H13a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-4H11a.75.75 0 0 1 0-1.5h.25v-3h-3V13a.75.75 0 0 1-1.5 0v-.25h-4V13a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1.5 0v.25h4V11a.75.75 0 0 1 1.5 0v.25h3v-3H11a.75.75 0 0 1 0-1.5h.25v-4H11a.75.75 0 0 1-.75-.75Zm-4.78-.53a.75.75 0 0 1 1.06 0l.47.47.47-.47a.75.75 0 0 1 1.06 1.06l-.78.78V4a.75.75 0 0 1-1.5 0v-.69l-.78-.78a.75.75 0 0 1 0-1.06Zm15.06 14a.75.75 0 1 0-1.06 1.06l.47.47-.47.47a.75.75 0 1 0 1.06 1.06l.47-.47.47.47a.75.75 0 1 0 1.06-1.06l-.47-.47.47-.47a.75.75 0 1 0-1.06-1.06l-.47.47-.47-.47Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCartesian);
export default ForwardRef;
