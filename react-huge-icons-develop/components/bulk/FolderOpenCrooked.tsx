import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderOpenCrooked = (
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
            d='M2 6.375v11.25c0 .916.352 1.747.922 2.356l3.349-7.559c.695-1.625 2.246-2.672 3.958-2.672h9.096V8.625c0-1.864-1.455-3.375-3.249-3.375h-3.353c-.578 0-1.146-.16-1.644-.464L8.91 3.464A3.156 3.156 0 0 0 7.267 3H5.248C3.454 3 2 4.511 2 6.375Z'
        />
        <path
            fill='currentColor'
            d='M10.229 9.75c-1.712 0-3.263 1.047-3.958 2.672l-3.349 7.559A3.18 3.18 0 0 0 5.248 21h9.459c1.521 0 2.931-.83 3.714-2.185l3.267-5.657c.866-1.5-.174-3.408-1.857-3.408H10.23Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpenCrooked);
export default ForwardRef;
