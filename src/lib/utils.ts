import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
const beautify = require('js-beautify').js_beautify;
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// check if user is admin, basic_member or whatever role.
export function checkUserRole(session:any) {
  if (
    !session ||
    !session.user ||
    !session.user.organizationMemberships ||
    session.user.organizationMemberships.length === 0
  ) {
    return null; // Return null if the user is not a basic member
  }

  const organizationMemberships = session.user.organizationMemberships;

  // Loop through all organization memberships
  for (const membership of organizationMemberships) {
    if (membership.role) {
      return membership.role.toLowerCase(); // Return the role in lowercase if it exists
    }
  }

  return null; // Return null if no role is found in the memberships
}


// formart code using prettier
export const formatCode = (code:string) => {
  const options = {
    "indent_size": "4",
    "indent_char": " ",
    "max_preserve_newlines": "5",
    "preserve_newlines": true,
    "keep_array_indentation": false,
    "break_chained_methods": false,
    "indent_scripts": "normal",
    "brace_style": "collapse",
    "space_before_conditional": true,
    "unescape_strings": false,
    "jslint_happy": false,
    "end_with_newline": false,
    "wrap_line_length": "0",
    "indent_inner_html": false,
    "comma_first": false,
    "e4x": false,
    "indent_empty_lines": false
  }
  try {
    return beautify(code, options); // Adjust formatting options as needed
  } catch (error) {
    console.error('Error formatting code:', error);
    return code;
  }
};

