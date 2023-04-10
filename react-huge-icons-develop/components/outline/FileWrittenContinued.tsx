import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileWrittenContinued = (
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
            d='M6 6.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 3.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 3.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5-15h10v-1.5H5v1.5Zm15 18.5H5v1.5h15v-1.5ZM2.75 19V5h-1.5v14h1.5ZM18 8.75h2v-1.5h-2v1.5ZM21.25 10v10h1.5V10h-1.5Zm-2.5 10V8h-1.5v12h1.5ZM20 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 20 22.75v-1.5ZM21.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 20h-1.5Zm-4-15v3h1.5V5h-1.5ZM5 21.25A2.25 2.25 0 0 1 2.75 19h-1.5A3.75 3.75 0 0 0 5 22.75v-1.5Zm10-18.5A2.25 2.25 0 0 1 17.25 5h1.5A3.75 3.75 0 0 0 15 1.25v1.5Zm5 6c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 7.25v1.5ZM5 1.25A3.75 3.75 0 0 0 1.25 5h1.5A2.25 2.25 0 0 1 5 2.75v-1.5Zm1 6.5h8v-1.5H6v1.5Zm0 5h8v-1.5H6v1.5Zm0 5h4v-1.5H6v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileWrittenContinued);
export default ForwardRef;
