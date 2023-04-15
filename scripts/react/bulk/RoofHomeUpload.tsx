import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeUpload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.76 8.665a2.6 2.6 0 0 0-.64.226c-.077.045-.514.453-.972.905-.752.746-.837.843-.89 1.026a.53.53 0 0 0 .001.401.75.75 0 0 0 .885.529c.175-.037.245-.09.646-.485l.45-.443.001 3.158c.001 2.985.005 3.167.075 3.318a.743.743 0 0 0 1.368 0c.07-.151.074-.333.075-3.319l.001-3.16.412.411c.339.338.448.422.608.47.173.052.22.052.399 0a.765.765 0 0 0 .523-.521c.052-.174.051-.247-.01-.481-.026-.1-1.491-1.584-1.723-1.746-.304-.212-.883-.35-1.209-.289'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeUpload);
export default ForwardRef;
