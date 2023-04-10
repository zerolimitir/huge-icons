import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookOpenFavourite = (
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
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M5 8.255c1.266.196 2.678.522 4 1.033m3-3.235V21c-.24 0-.48-.072-.683-.215-2.124-1.488-5.104-2.162-7.323-2.413C2.896 18.248 2 17.332 2 16.2V4.935c0-1.131.896-2.048 1.994-1.924 2.219.251 5.2.925 7.323 2.413.408.286.958.286 1.366 0 2.124-1.488 5.104-2.162 7.323-2.413C21.104 2.887 22 3.804 22 4.935V14M5 12.255c.64.099 1.316.23 2 .403m10.535 4.423.221-.221a1.562 1.562 0 1 1 2.21 2.21l-1.547 1.546a1.25 1.25 0 0 1-1.767 0l-1.547-1.547a1.562 1.562 0 1 1 2.21-2.21l.22.222Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookOpenFavourite);
export default ForwardRef;
