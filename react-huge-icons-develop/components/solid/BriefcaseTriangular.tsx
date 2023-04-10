import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBriefcaseTriangular = (
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
            d='M8.75 3.75A2.25 2.25 0 0 1 11 1.5h2a2.25 2.25 0 0 1 2.25 2.25v1h-6.5v-1Zm-1.5 1v-1A3.75 3.75 0 0 1 11 0h2a3.75 3.75 0 0 1 3.75 3.75v1H18a4 4 0 0 1 4 4v1.173c-.694.334-1.565.734-2.53 1.134-1.796.744-3.856 1.46-5.693 1.775a2 2 0 0 0-3.554 0c-1.837-.315-3.897-1.03-5.693-1.775-.965-.4-1.836-.8-2.53-1.134V8.75a4 4 0 0 1 4-4h1.25Zm12.794 7.693a50.22 50.22 0 0 0 1.956-.86v5.167a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-5.168c.58.27 1.243.566 1.956.86 1.832.76 4.066 1.549 6.13 1.887a2 2 0 0 0 3.829 0c2.063-.338 4.297-1.127 6.13-1.886Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseTriangular);
export default ForwardRef;
