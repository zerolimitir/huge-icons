import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpringNotesUpload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.811 1.278a.883.883 0 0 0-.481.374c-.063.115-.071.297-.082 1.768-.009 1.101.001 1.689.031 1.788.089.304.412.55.721.55s.632-.246.721-.55c.03-.099.04-.687.031-1.788-.011-1.569-.016-1.646-.094-1.779a.807.807 0 0 0-.847-.363m8 0a.883.883 0 0 0-.481.374c-.063.115-.071.297-.082 1.768-.009 1.101.001 1.689.031 1.788.089.304.412.55.721.55s.632-.246.721-.55c.03-.099.04-.687.031-1.788-.011-1.569-.016-1.646-.094-1.779a.807.807 0 0 0-.847-.363M11.5 9.734c-.372.123-.534.249-1.309 1.018-.434.431-.817.841-.85.912a.863.863 0 0 0-.061.313c0 .44.301.743.74.743.274 0 .368-.057.808-.49l.412-.405.001 2.157c.001 2.013.006 2.169.075 2.318.175.38.587.552.955.398a.734.734 0 0 0 .413-.398c.069-.149.074-.305.075-2.316l.001-2.157.454.444c.491.479.569.519.931.478.211-.023.429-.18.541-.389a.857.857 0 0 0 .013-.656c-.033-.071-.425-.491-.87-.934-.712-.709-.843-.821-1.089-.937-.25-.117-.323-.132-.68-.141-.252-.007-.459.009-.56.042'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotesUpload);
export default ForwardRef;
