import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBriefcaseTriangularHollow = (
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
            d='M2 10.12v8.128a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V10.12l-7.597 2.464S13.5 15.023 12 15.023s-2.61-2.439-2.61-2.439L2 10.12Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M18 6.248H6a4 4 0 0 0-4 4v.347s2.914 1.941 7.498 2.51v.457a2 2 0 0 0 2 2h1.004a2 2 0 0 0 2-2v-.457c4.584-.569 7.498-2.51 7.498-2.51v-.347a4 4 0 0 0-4-4Zm-6.925 6.094a.2.2 0 0 0-.2.2v.989a.8.8 0 0 0 .8.8h.65a.8.8 0 0 0 .8-.8v-.99a.2.2 0 0 0-.2-.2h-1.85Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11 2.998a2.25 2.25 0 0 0-2.25 2.25v1a.75.75 0 0 1-1.5 0v-1A3.75 3.75 0 0 1 11 1.498h2a3.75 3.75 0 0 1 3.75 3.75v1a.75.75 0 0 1-1.5 0v-1A2.25 2.25 0 0 0 13 2.998h-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseTriangularHollow);
export default ForwardRef;
