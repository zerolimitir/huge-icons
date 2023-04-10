import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoadLocation = (
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
            d='M22 6c0 2.21-2 6-4 6s-4-3.79-4-6a4 4 0 0 1 8 0Zm-2.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-7 0c0-.706.133-1.38.375-2H8.386a2 2 0 0 0-1.873 1.298l-4.5 12A2 2 0 0 0 3.886 20h16.228a2 2 0 0 0 1.873-2.702l-1.736-4.63c-.598.455-1.363.832-2.251.832-.979 0-1.808-.458-2.428-.974-.63-.524-1.168-1.208-1.601-1.914a10.856 10.856 0 0 1-1.22-2.845V8a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 1.268-.541A5.648 5.648 0 0 1 12.5 6Zm.25 10a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM12 10.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadLocation);
export default ForwardRef;
