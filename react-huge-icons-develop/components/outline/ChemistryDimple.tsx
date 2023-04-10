import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChemistryDimple = (
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
            d='M13 2v-.75a.75.75 0 0 0-.75.75H13Zm4 0h.75a.75.75 0 0 0-.75-.75V2Zm0 6v.75a.75.75 0 0 0 .75-.75H17Zm-4 0h-.75c0 .414.336.75.75.75V8Zm-1-6.75a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5ZM6.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 20a.75.75 0 0 0 1.5 0h-1.5ZM4 7.25a.75.75 0 0 0 0 1.5v-1.5Zm16 1.5a.75.75 0 0 0 0-1.5v1.5ZM4 21.25a.75.75 0 0 0 0 1.5v-1.5Zm16 1.5a.75.75 0 0 0 0-1.5v1.5Zm-7-20h4v-1.5h-4v1.5ZM16.25 2v6h1.5V2h-1.5ZM17 7.25h-4v1.5h4v-1.5ZM13.75 8V2h-1.5v6h1.5Zm5.5 5A4.25 4.25 0 0 1 15 17.25v1.5A5.75 5.75 0 0 0 20.75 13h-1.5ZM15 17.25A4.25 4.25 0 0 1 10.75 13h-1.5A5.75 5.75 0 0 0 15 18.75v-1.5ZM10.75 13A4.25 4.25 0 0 1 15 8.75v-1.5A5.75 5.75 0 0 0 9.25 13h1.5ZM15 8.75A4.25 4.25 0 0 1 19.25 13h1.5A5.75 5.75 0 0 0 15 7.25v1.5Zm-3-6h6v-1.5h-6v1.5ZM5.25 2v20h1.5V2h-1.5ZM4 8.75h16v-1.5H4v1.5Zm0 14h16v-1.5H4v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChemistryDimple);
export default ForwardRef;
