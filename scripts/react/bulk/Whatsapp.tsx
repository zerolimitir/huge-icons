import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWhatsapp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.502 8.08a.821.821 0 0 0-.425.435c-.081.172-.086.225-.064.765.069 1.715.811 3.379 2.07 4.637 1.258 1.258 2.915 1.998 4.637 2.07.545.022.591.018.77-.066a.885.885 0 0 0 .454-.476c.048-.112.059-.259.048-.645-.013-.445-.026-.522-.119-.7-.191-.365-.413-.547-.933-.762-.469-.194-.812-.209-1.123-.049a1.123 1.123 0 0 0-.257.171c-.103.124-.365.23-.519.209-.207-.027-.717-.272-1.096-.525a4.202 4.202 0 0 1-1.45-1.727c-.229-.495-.22-.666.053-.992.148-.178.245-.394.274-.61.02-.156.004-.263-.08-.513-.224-.668-.434-.963-.834-1.171-.19-.099-.252-.11-.728-.12-.457-.01-.539-.002-.678.069'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWhatsapp);
export default ForwardRef;
