import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgOpenBoxArrowDown = (
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
            d='M11.247 4.625V2.838c0-.417.331-.756.74-.756s.74.339.74.756v1.855l.655-.62a.735.735 0 0 1 1.069.056.773.773 0 0 1-.061 1.066l-2.051 1.899a.492.492 0 0 1-.671 0L9.613 5.2a.78.78 0 0 1-.062-1.077.742.742 0 0 1 1.067-.069l.629.571ZM4 11.74v5.087a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.826V11.74l-5.33 2.665a1.5 1.5 0 0 1-1.918-.51L12 12.766l-.752 1.128a1.5 1.5 0 0 1-1.919.51L4 11.739Zm7.976-1.661-7.96-3.992-1.987 2.956 8.002 4.023 1.945-2.987Zm0 0 2.022 2.987 8.02-3.965-2.027-2.988-8.015 3.966Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxArrowDown);
export default ForwardRef;
