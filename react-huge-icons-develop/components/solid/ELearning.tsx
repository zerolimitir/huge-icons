import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgELearning = (
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
            d='M8.798 2.004c.66.073 1.643.269 2.452.603v5.996c-.81-.342-1.791-.552-2.452-.625C8.358 7.93 8 7.573 8 7.133v-4.38c0-.44.359-.797.798-.749Zm6.404 5.974c-.66.073-1.643.283-2.452.625V2.607c.81-.334 1.791-.53 2.452-.603.44-.048.798.309.798.749v4.38c0 .44-.359.797-.798.845ZM6.5 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6.25v2.25H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25V19H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1.5v2.133c0 1.299-1.031 2.215-2.134 2.336a8.355 8.355 0 0 0-1.357.279c-.518.152-.926.33-1.165.492a1.5 1.5 0 0 1-1.688 0c-.239-.163-.647-.34-1.165-.492a8.355 8.355 0 0 0-1.357-.279C7.53 9.348 6.5 8.432 6.5 7.133V5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgELearning);
export default ForwardRef;
