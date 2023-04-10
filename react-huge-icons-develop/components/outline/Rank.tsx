import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRank = (
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
            d='M11 8.75h2v-1.5h-2v1.5ZM14.25 10v10h1.5V10h-1.5ZM13 21.25h-2v1.5h2v-1.5ZM9.75 20V10h-1.5v10h1.5ZM11 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 11 22.75v-1.5ZM14.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 15.75 20h-1.5ZM13 8.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 13 7.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 8.25 10h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm6 7.5h2v-1.5h-2v1.5ZM20.25 16v4h1.5v-4h-1.5ZM19 21.25h-2v1.5h2v-1.5ZM15.75 20v-4h-1.5v4h1.5ZM17 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 17 22.75v-1.5ZM20.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 21.75 20h-1.5ZM19 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 19 13.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 14.25 16h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm-12-.5h2v-1.5H5v1.5ZM8.25 14v6h1.5v-6h-1.5ZM7 21.25H5v1.5h2v-1.5ZM3.75 20v-6h-1.5v6h1.5ZM5 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 5 22.75v-1.5ZM8.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 9.75 20h-1.5ZM7 12.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 7 11.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 2.25 14h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm6.524-9.286a.5.5 0 0 1 .952 0l.156.482a.5.5 0 0 0 .476.346h.508a.5.5 0 0 1 .293.904l-.41.299a.5.5 0 0 0-.182.559l.157.482a.5.5 0 0 1-.77.56l-.41-.299a.5.5 0 0 0-.588 0l-.41.298a.5.5 0 0 1-.77-.559l.157-.482a.5.5 0 0 0-.182-.56l-.41-.298a.5.5 0 0 1 .293-.904h.508a.5.5 0 0 0 .476-.346l.156-.482Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRank);
export default ForwardRef;
