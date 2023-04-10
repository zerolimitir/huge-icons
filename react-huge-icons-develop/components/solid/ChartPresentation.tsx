import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartPresentation = (
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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-5.25v1.25H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25V20H6a4 4 0 0 1-4-4V6Zm8.5 1.75a.75.75 0 0 0-.75.75V9A2.75 2.75 0 0 1 7 11.75H6a.75.75 0 0 1 0-1.5h1c.69 0 1.25-.56 1.25-1.25v-.5a2.25 2.25 0 0 1 4.5 0v5a.75.75 0 0 0 1.5 0V13A2.75 2.75 0 0 1 17 10.25h1a.75.75 0 0 1 0 1.5h-1c-.69 0-1.25.56-1.25 1.25v.5a2.25 2.25 0 0 1-4.5 0v-5a.75.75 0 0 0-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartPresentation);
export default ForwardRef;
