import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrackPrevious = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.811 6.278a.883.883 0 0 0-.481.374c-.065.12-.071.461-.081 5.262-.007 3.669.002 5.18.034 5.298a.803.803 0 0 0 .515.507c.4.108.812-.12.92-.51.026-.092.042-.813.042-1.88v-1.73l.15.097c.587.378 6.26 3.646 6.442 3.71a1.97 1.97 0 0 0 2.052-.483c.286-.286.475-.626.552-.995.062-.297.062-7.559 0-7.856-.18-.864-.93-1.51-1.832-1.579a1.871 1.871 0 0 0-1.033.222c-.127.065-1.603.919-3.279 1.897l-3.049 1.78-.011-1.806c-.012-1.737-.015-1.811-.094-1.945a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPrevious);
export default ForwardRef;
