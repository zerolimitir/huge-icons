import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.76 8.665a2.6 2.6 0 0 0-.64.226c-.077.045-.514.453-.972.905-.752.746-.837.843-.89 1.026a.53.53 0 0 0 .001.401.75.75 0 0 0 .885.529c.175-.037.245-.09.646-.485l.45-.443.001 2.158c.001 2.013.006 2.169.075 2.318a.734.734 0 0 0 .413.398c.368.154.78-.018.955-.398.069-.149.074-.305.075-2.318l.001-2.158.45.443c.401.395.471.448.646.485a.75.75 0 0 0 .885-.529.53.53 0 0 0 .001-.401c-.054-.182-.139-.281-.871-1.006-.446-.443-.869-.844-.939-.892-.271-.184-.87-.316-1.172-.259'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatArrowUp);
export default ForwardRef;
