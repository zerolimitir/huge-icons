import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStudyLights = (
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
            d='M9.53 5.47a.75.75 0 0 1 0 1.06l-5.586 5.586a1.25 1.25 0 0 0 0 1.768l7.367 7.366H9.189l-6.305-6.306a2.75 2.75 0 0 1 0-3.889L8.47 5.47a.75.75 0 0 1 1.06 0Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.25 22a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M9.057 2.586a2 2 0 0 1 2.176-.435L15.24 3.8a2 2 0 0 1 .653 3.263l-2.829 2.829a2 2 0 0 1-3.263-.653L8.15 5.233a2 2 0 0 1 .435-2.176l.471-.471Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.952 9.805a.75.75 0 0 1 1.06 0l1.415 1.414a.75.75 0 0 1-1.061 1.061l-1.414-1.414a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.36 11.707a.75.75 0 0 1 .75.75v1.414a.75.75 0 0 1-1.5 0v-1.414a.75.75 0 0 1 .75-.75Zm6.407-3.493a.75.75 0 0 1-.75.75h-1.414a.75.75 0 0 1 0-1.5h1.414a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStudyLights);
export default ForwardRef;
