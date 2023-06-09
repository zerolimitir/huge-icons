import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgQrScan = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M6.66 4.278A2.753 2.753 0 0 0 4.354 6.26c-.079.283-.09.415-.092 1.14-.002.79.001.825.091.969.311.501 1.059.48 1.309-.037.061-.125.078-.289.098-.932.021-.691.033-.799.108-.942a1.72 1.72 0 0 1 .59-.591l.162-.087 5.307-.011c5.249-.01 5.309-.009 5.524.071.261.098.567.383.685.64.072.156.085.284.104.96.019.726.027.79.113.929a.741.741 0 0 0 1.369-.235c.075-.362.026-1.511-.082-1.894-.249-.882-.975-1.611-1.88-1.887l-.3-.091-5.28-.006c-2.904-.004-5.388.007-5.52.022m-4.845 7c-.484.115-.717.726-.432 1.13a.951.951 0 0 0 .277.248l.16.084 10.06.011c7.219.007 10.12-.002 10.274-.034.748-.155.775-1.244.035-1.431-.211-.053-20.153-.061-20.374-.008m3 3.999a.8.8 0 0 0-.462.354c-.09.144-.093.179-.091.969.002.725.013.857.092 1.14a2.793 2.793 0 0 0 1.906 1.908l.32.092h10.84l.32-.092c.912-.263 1.648-.995 1.9-1.888.108-.383.157-1.532.082-1.894a.74.74 0 0 0-1.369-.235c-.086.139-.094.203-.113.929-.019.676-.032.804-.104.96a1.412 1.412 0 0 1-.683.639c-.213.08-.3.081-5.453.081-5.164 0-5.24-.001-5.454-.081a1.342 1.342 0 0 1-.705-.705c-.068-.183-.081-.314-.082-.826-.001-.678-.039-.908-.179-1.092-.159-.209-.502-.325-.765-.259'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgQrScan);
export default ForwardRef;
