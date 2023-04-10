import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRank = (
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
            d='M12.476 1.964a.5.5 0 0 0-.952 0l-.156.482a.5.5 0 0 1-.476.346h-.508a.5.5 0 0 0-.293.904l.41.299a.5.5 0 0 1 .182.559l-.157.483a.5.5 0 0 0 .77.559l.41-.299a.5.5 0 0 1 .588 0l.41.299a.5.5 0 0 0 .77-.56l-.157-.482a.5.5 0 0 1 .182-.56l.41-.298a.5.5 0 0 0-.293-.904h-.508a.5.5 0 0 1-.476-.346l-.156-.482ZM11 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2Zm7 6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2ZM2 14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRank);
export default ForwardRef;
