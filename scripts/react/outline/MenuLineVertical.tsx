import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMenuLineVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 6.278a.883.883 0 0 0-.481.374c-.065.12-.071.461-.081 5.262-.007 3.669.002 5.18.034 5.298a.803.803 0 0 0 .515.507.746.746 0 0 0 .922-.517c.028-.105.038-1.824.031-5.288-.011-5.092-.012-5.135-.093-5.273a.807.807 0 0 0-.847-.363m-4 3a.883.883 0 0 0-.481.374c-.064.117-.071.318-.081 2.259-.008 1.491.002 2.181.034 2.298a.809.809 0 0 0 .192.316.742.742 0 0 0 1.245-.326c.028-.104.039-.878.031-2.288-.011-2.065-.014-2.135-.093-2.27a.807.807 0 0 0-.847-.363m8 0a.883.883 0 0 0-.481.374c-.064.117-.071.318-.081 2.259-.008 1.491.002 2.181.034 2.298a.809.809 0 0 0 .192.316.742.742 0 0 0 1.245-.326c.028-.104.039-.878.031-2.288-.011-2.065-.014-2.135-.093-2.27a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMenuLineVertical);
export default ForwardRef;
