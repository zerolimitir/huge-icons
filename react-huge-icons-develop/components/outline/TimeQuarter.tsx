import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTimeQuarter = (
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
            d='M12 21.25a.75.75 0 0 0 0 1.5v-1.5ZM1.25 12a.75.75 0 0 0 1.5 0h-1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5Zm-18.5 0A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5Z'
        />
        <path
            fill='currentColor'
            d='M12 22.75a.75.75 0 0 0 0-1.5v1.5ZM2.75 12a.75.75 0 0 0-1.5 0h1.5Zm8.99 9.246a.75.75 0 0 0-.042 1.5l.041-1.5Zm-3.575.8a.75.75 0 0 0 .535-1.402l-.535 1.402Zm.056-1.6a.75.75 0 1 0-.613 1.368l.613-1.368Zm-3.606-.635a.75.75 0 1 0 1.03-1.09l-1.03 1.09Zm.663-1.456a.75.75 0 0 0-1.09 1.03l1.09-1.03Zm-3.092-1.963a.75.75 0 1 0 1.368-.613l-1.368.613Zm1.17-1.092a.75.75 0 0 0-1.402.535l1.402-.535Zm-2.102-2.998a.75.75 0 1 0 1.5-.041l-1.5.04ZM12 21.25c-.087 0-.174-.001-.26-.004l-.042 1.5c.1.003.201.004.302.004v-1.5Zm-3.3-.606a9.1 9.1 0 0 1-.479-.198l-.613 1.368c.183.082.369.16.557.232l.535-1.402Zm-3.055-1.922a9.262 9.262 0 0 1-.367-.367l-1.09 1.03c.139.146.28.288.427.426l1.03-1.09Zm-2.09-2.943a9.18 9.18 0 0 1-.2-.48l-1.4.536c.071.188.148.374.23.557l1.37-.613Zm-.801-3.518A9.435 9.435 0 0 1 2.75 12h-1.5c0 .101.001.202.004.302l1.5-.041Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 13.5V16m-6-4h4.5'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeQuarter);
export default ForwardRef;
