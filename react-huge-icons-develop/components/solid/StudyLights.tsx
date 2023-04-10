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
            fillRule='evenodd'
            d='M9.057 2.586a2 2 0 0 1 2.176-.435L15.24 3.8a2 2 0 0 1 .652 3.263l-2.828 2.829A2 2 0 0 1 9.8 9.24l-.869-2.11-4.987 4.986a1.25 1.25 0 0 0 0 1.768l7.366 7.366H15a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h2.189l-6.305-6.306a2.75 2.75 0 0 1 0-3.889l5.429-5.428-.163-.394a2 2 0 0 1 .436-2.176l.471-.471Zm12.71 5.628a.75.75 0 0 1-.75.75h-1.414a.75.75 0 1 1 0-1.5h1.414a.75.75 0 0 1 .75.75Zm-3.755 1.591a.75.75 0 1 0-1.06 1.06l1.414 1.415a.75.75 0 1 0 1.06-1.06l-1.414-1.415Zm-1.902 2.652a.75.75 0 0 0-1.5 0v1.414a.75.75 0 1 0 1.5 0v-1.414Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStudyLights);
export default ForwardRef;
