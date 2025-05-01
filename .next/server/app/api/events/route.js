/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/events/route";
exports.ids = ["app/api/events/route"];
exports.modules = {

/***/ "(rsc)/./app/api/events/route.ts":
/*!*********************************!*\
  !*** ./app/api/events/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth/middleware */ \"(rsc)/./lib/auth/middleware.ts\");\n\n\nasync function GET(request) {\n    try {\n        const { searchParams } = new URL(request.url);\n        const category = searchParams.get('category');\n        const clubId = searchParams.get('clubId');\n        const allEvents = [\n            {\n                id: '1',\n                title: \"Tech Innovators Summit 2024\",\n                description: \"Join industry leaders and innovators for tech talks and hands-on workshops. Learn about AI, blockchain, and future tech trends.\",\n                date: \"2024-04-15\",\n                time: \"10:00 AM\",\n                location: \"Main Auditorium\",\n                category: \"Technology\",\n                isPaid: true,\n                price: \"₹499\",\n                image: \"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format\"\n            },\n            {\n                id: '2',\n                title: \"Cultural Fest 2024\",\n                description: \"Celebrate diverse cultural performances with music, dance, and art exhibitions.\",\n                date: \"2024-04-20\",\n                time: \"6:00 PM\",\n                location: \"Campus Ground\",\n                category: \"Cultural\",\n                isPaid: false,\n                image: \"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format\"\n            },\n            {\n                id: '3',\n                title: \"Career Development Workshop\",\n                description: \"Master interview skills, resume writing, and professional networking with industry experts.\",\n                date: \"2024-04-25\",\n                time: \"2:00 PM\",\n                location: \"Seminar Hall B\",\n                category: \"Career\",\n                isPaid: true,\n                price: \"₹299\",\n                image: \"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format\"\n            },\n            {\n                id: '4',\n                title: \"Photography Masterclass\",\n                description: \"Learn advanced photography techniques from professional photographers.\",\n                date: \"2024-05-01\",\n                time: \"11:00 AM\",\n                location: \"Art Studio\",\n                category: \"Workshop\",\n                isPaid: true,\n                price: \"₹799\",\n                image: \"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format\"\n            },\n            {\n                id: '5',\n                title: \"Environmental Awareness Drive\",\n                description: \"Join us for a day of environmental conservation activities and awareness sessions.\",\n                date: \"2024-05-05\",\n                time: \"9:00 AM\",\n                location: \"Campus Garden\",\n                category: \"Environment\",\n                isPaid: false,\n                image: \"https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format\"\n            },\n            {\n                id: '6',\n                title: \"Entrepreneurship Seminar\",\n                description: \"Learn from successful entrepreneurs about starting and scaling your business.\",\n                date: \"2024-05-10\",\n                time: \"3:00 PM\",\n                location: \"Business Center\",\n                category: \"Business\",\n                isPaid: true,\n                price: \"₹399\",\n                image: \"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format\"\n            }\n        ];\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(allEvents);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to fetch events'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const user = await (0,_lib_auth_middleware__WEBPACK_IMPORTED_MODULE_1__.authenticateUser)(request);\n        if (user.role !== 'admin') {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Only admins can create events'\n            }, {\n                status: 403\n            });\n        }\n        const eventData = await request.json();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(eventData);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to create event'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2V2ZW50cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzJDO0FBR2M7QUFFbEQsZUFBZUUsSUFBSUMsT0FBZ0I7SUFDeEMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSUYsUUFBUUcsR0FBRztRQUM1QyxNQUFNQyxXQUFXSCxhQUFhSSxHQUFHLENBQUM7UUFDbEMsTUFBTUMsU0FBU0wsYUFBYUksR0FBRyxDQUFDO1FBRWhDLE1BQU1FLFlBQVk7WUFDaEI7Z0JBQ0VDLElBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLE1BQU07Z0JBQ05DLE1BQU07Z0JBQ05DLFVBQVU7Z0JBQ1ZULFVBQVU7Z0JBQ1ZVLFFBQVE7Z0JBQ1JDLE9BQU87Z0JBQ1BDLE9BQU87WUFDVDtZQUNBO2dCQUNFUixJQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxNQUFNO2dCQUNOQyxNQUFNO2dCQUNOQyxVQUFVO2dCQUNWVCxVQUFVO2dCQUNWVSxRQUFRO2dCQUNSRSxPQUFPO1lBQ1Q7WUFDQTtnQkFDRVIsSUFBSTtnQkFDSkMsT0FBTztnQkFDUEMsYUFBYTtnQkFDYkMsTUFBTTtnQkFDTkMsTUFBTTtnQkFDTkMsVUFBVTtnQkFDVlQsVUFBVTtnQkFDVlUsUUFBUTtnQkFDUkMsT0FBTztnQkFDUEMsT0FBTztZQUNUO1lBQ0E7Z0JBQ0VSLElBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLE1BQU07Z0JBQ05DLE1BQU07Z0JBQ05DLFVBQVU7Z0JBQ1ZULFVBQVU7Z0JBQ1ZVLFFBQVE7Z0JBQ1JDLE9BQU87Z0JBQ1BDLE9BQU87WUFDVDtZQUNBO2dCQUNFUixJQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxNQUFNO2dCQUNOQyxNQUFNO2dCQUNOQyxVQUFVO2dCQUNWVCxVQUFVO2dCQUNWVSxRQUFRO2dCQUNSRSxPQUFPO1lBQ1Q7WUFDQTtnQkFDRVIsSUFBSTtnQkFDSkMsT0FBTztnQkFDUEMsYUFBYTtnQkFDYkMsTUFBTTtnQkFDTkMsTUFBTTtnQkFDTkMsVUFBVTtnQkFDVlQsVUFBVTtnQkFDVlUsUUFBUTtnQkFDUkMsT0FBTztnQkFDUEMsT0FBTztZQUNUO1NBQ0Q7UUFFRCxPQUFPbkIscURBQVlBLENBQUNvQixJQUFJLENBQUNWO0lBQzNCLEVBQUUsT0FBT1csT0FBTztRQUNkLE9BQU9yQixxREFBWUEsQ0FBQ29CLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXlCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzlFO0FBQ0Y7QUFFTyxlQUFlQyxLQUFLcEIsT0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU1xQixPQUFPLE1BQU12QixzRUFBZ0JBLENBQUNFO1FBQ3BDLElBQUlxQixLQUFLQyxJQUFJLEtBQUssU0FBUztZQUN6QixPQUFPekIscURBQVlBLENBQUNvQixJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZ0MsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3JGO1FBRUEsTUFBTUksWUFBWSxNQUFNdkIsUUFBUWlCLElBQUk7UUFDcEMsT0FBT3BCLHFEQUFZQSxDQUFDb0IsSUFBSSxDQUFDTTtJQUMzQixFQUFFLE9BQU9MLE9BQU87UUFDZCxPQUFPckIscURBQVlBLENBQUNvQixJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF5QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM5RTtBQUNGIiwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9hcGkvZXZlbnRzL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgZGIgfSBmcm9tICdAL2xpYi9kYic7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICdAL2xpYi9kYi9zY2hlbWEnO1xuaW1wb3J0IHsgYXV0aGVudGljYXRlVXNlciB9IGZyb20gJ0AvbGliL2F1dGgvbWlkZGxld2FyZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IHNlYXJjaFBhcmFtcy5nZXQoJ2NhdGVnb3J5Jyk7XG4gICAgY29uc3QgY2x1YklkID0gc2VhcmNoUGFyYW1zLmdldCgnY2x1YklkJyk7XG5cbiAgICBjb25zdCBhbGxFdmVudHMgPSBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIHRpdGxlOiBcIlRlY2ggSW5ub3ZhdG9ycyBTdW1taXQgMjAyNFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJKb2luIGluZHVzdHJ5IGxlYWRlcnMgYW5kIGlubm92YXRvcnMgZm9yIHRlY2ggdGFsa3MgYW5kIGhhbmRzLW9uIHdvcmtzaG9wcy4gTGVhcm4gYWJvdXQgQUksIGJsb2NrY2hhaW4sIGFuZCBmdXR1cmUgdGVjaCB0cmVuZHMuXCIsXG4gICAgICAgIGRhdGU6IFwiMjAyNC0wNC0xNVwiLFxuICAgICAgICB0aW1lOiBcIjEwOjAwIEFNXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIk1haW4gQXVkaXRvcml1bVwiLFxuICAgICAgICBjYXRlZ29yeTogXCJUZWNobm9sb2d5XCIsXG4gICAgICAgIGlzUGFpZDogdHJ1ZSxcbiAgICAgICAgcHJpY2U6IFwi4oK5NDk5XCIsXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQwNTc1NDY3MDYzLTE3OGE1MGMyZGY4Nz93PTgwMCZhdXRvPWZvcm1hdFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzInLFxuICAgICAgICB0aXRsZTogXCJDdWx0dXJhbCBGZXN0IDIwMjRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2VsZWJyYXRlIGRpdmVyc2UgY3VsdHVyYWwgcGVyZm9ybWFuY2VzIHdpdGggbXVzaWMsIGRhbmNlLCBhbmQgYXJ0IGV4aGliaXRpb25zLlwiLFxuICAgICAgICBkYXRlOiBcIjIwMjQtMDQtMjBcIixcbiAgICAgICAgdGltZTogXCI2OjAwIFBNXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIkNhbXB1cyBHcm91bmRcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiQ3VsdHVyYWxcIixcbiAgICAgICAgaXNQYWlkOiBmYWxzZSxcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTQ1MjUyNTMxNjEtN2E0NmQxOWNkODE5P3c9ODAwJmF1dG89Zm9ybWF0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMycsXG4gICAgICAgIHRpdGxlOiBcIkNhcmVlciBEZXZlbG9wbWVudCBXb3Jrc2hvcFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNYXN0ZXIgaW50ZXJ2aWV3IHNraWxscywgcmVzdW1lIHdyaXRpbmcsIGFuZCBwcm9mZXNzaW9uYWwgbmV0d29ya2luZyB3aXRoIGluZHVzdHJ5IGV4cGVydHMuXCIsXG4gICAgICAgIGRhdGU6IFwiMjAyNC0wNC0yNVwiLFxuICAgICAgICB0aW1lOiBcIjI6MDAgUE1cIixcbiAgICAgICAgbG9jYXRpb246IFwiU2VtaW5hciBIYWxsIEJcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiQ2FyZWVyXCIsXG4gICAgICAgIGlzUGFpZDogdHJ1ZSxcbiAgICAgICAgcHJpY2U6IFwi4oK5Mjk5XCIsXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUyNjY0NzMwLWQzMDdjYTg4NDk3OD93PTgwMCZhdXRvPWZvcm1hdFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzQnLFxuICAgICAgICB0aXRsZTogXCJQaG90b2dyYXBoeSBNYXN0ZXJjbGFzc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMZWFybiBhZHZhbmNlZCBwaG90b2dyYXBoeSB0ZWNobmlxdWVzIGZyb20gcHJvZmVzc2lvbmFsIHBob3RvZ3JhcGhlcnMuXCIsXG4gICAgICAgIGRhdGU6IFwiMjAyNC0wNS0wMVwiLFxuICAgICAgICB0aW1lOiBcIjExOjAwIEFNXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIkFydCBTdHVkaW9cIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiV29ya3Nob3BcIixcbiAgICAgICAgaXNQYWlkOiB0cnVlLFxuICAgICAgICBwcmljZTogXCLigrk3OTlcIixcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDIwMzg3ODQ0NTYtMWVhOGU5MzU2NDBlP3c9ODAwJmF1dG89Zm9ybWF0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnNScsXG4gICAgICAgIHRpdGxlOiBcIkVudmlyb25tZW50YWwgQXdhcmVuZXNzIERyaXZlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkpvaW4gdXMgZm9yIGEgZGF5IG9mIGVudmlyb25tZW50YWwgY29uc2VydmF0aW9uIGFjdGl2aXRpZXMgYW5kIGF3YXJlbmVzcyBzZXNzaW9ucy5cIixcbiAgICAgICAgZGF0ZTogXCIyMDI0LTA1LTA1XCIsXG4gICAgICAgIHRpbWU6IFwiOTowMCBBTVwiLFxuICAgICAgICBsb2NhdGlvbjogXCJDYW1wdXMgR2FyZGVuXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkVudmlyb25tZW50XCIsXG4gICAgICAgIGlzUGFpZDogZmFsc2UsXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQyNjAxOTA2OTkwLWI0ZDNmYjc3OGIwOT93PTgwMCZhdXRvPWZvcm1hdFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzYnLFxuICAgICAgICB0aXRsZTogXCJFbnRyZXByZW5ldXJzaGlwIFNlbWluYXJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTGVhcm4gZnJvbSBzdWNjZXNzZnVsIGVudHJlcHJlbmV1cnMgYWJvdXQgc3RhcnRpbmcgYW5kIHNjYWxpbmcgeW91ciBidXNpbmVzcy5cIixcbiAgICAgICAgZGF0ZTogXCIyMDI0LTA1LTEwXCIsXG4gICAgICAgIHRpbWU6IFwiMzowMCBQTVwiLFxuICAgICAgICBsb2NhdGlvbjogXCJCdXNpbmVzcyBDZW50ZXJcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiQnVzaW5lc3NcIixcbiAgICAgICAgaXNQYWlkOiB0cnVlLFxuICAgICAgICBwcmljZTogXCLigrkzOTlcIixcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTY3NjExNzUtNGI0NmE1NzJiNzg2P3c9ODAwJmF1dG89Zm9ybWF0XCJcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGFsbEV2ZW50cyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggZXZlbnRzJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRlVXNlcihyZXF1ZXN0KTtcbiAgICBpZiAodXNlci5yb2xlICE9PSAnYWRtaW4nKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ09ubHkgYWRtaW5zIGNhbiBjcmVhdGUgZXZlbnRzJyB9LCB7IHN0YXR1czogNDAzIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihldmVudERhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSBldmVudCcgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImF1dGhlbnRpY2F0ZVVzZXIiLCJHRVQiLCJyZXF1ZXN0Iiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwiY2F0ZWdvcnkiLCJnZXQiLCJjbHViSWQiLCJhbGxFdmVudHMiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwidGltZSIsImxvY2F0aW9uIiwiaXNQYWlkIiwicHJpY2UiLCJpbWFnZSIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsIlBPU1QiLCJ1c2VyIiwicm9sZSIsImV2ZW50RGF0YSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/events/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth/middleware.ts":
/*!********************************!*\
  !*** ./lib/auth/middleware.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authenticateAdmin: () => (/* binding */ authenticateAdmin),\n/* harmony export */   authenticateUser: () => (/* binding */ authenticateUser)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/api/server.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/api/headers.js\");\n\n\n\nasync function authenticateUser(request) {\n    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)().get('token')?.value;\n    if (!token) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Unauthorized'\n        }, {\n            status: 401\n        });\n    }\n    try {\n        const decoded = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.verify)(token, process.env.JWT_SECRET);\n        return decoded;\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Invalid token'\n        }, {\n            status: 401\n        });\n    }\n}\nasync function authenticateAdmin(request) {\n    const user = await authenticateUser(request);\n    if (user.role !== 'admin') {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Forbidden'\n        }, {\n            status: 403\n        });\n    }\n    return user;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC9taWRkbGV3YXJlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMyQztBQUNMO0FBQ0M7QUFFaEMsZUFBZUcsaUJBQWlCQyxPQUFnQjtJQUNyRCxNQUFNQyxRQUFRSCxxREFBT0EsR0FBR0ksR0FBRyxDQUFDLFVBQVVDO0lBRXRDLElBQUksQ0FBQ0YsT0FBTztRQUNWLE9BQU9MLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFlLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3BFO0lBRUEsSUFBSTtRQUNGLE1BQU1DLFVBQVVWLG9EQUFNQSxDQUFDSSxPQUFPTyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDcEQsT0FBT0g7SUFDVCxFQUFFLE9BQU9GLE9BQU87UUFDZCxPQUFPVCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZ0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDckU7QUFDRjtBQUVPLGVBQWVLLGtCQUFrQlgsT0FBZ0I7SUFDdEQsTUFBTVksT0FBTyxNQUFNYixpQkFBaUJDO0lBRXBDLElBQUksS0FBY2EsSUFBSSxLQUFLLFNBQVM7UUFDbEMsT0FBT2pCLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFZLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ2pFO0lBRUEsT0FBT007QUFDVCIsInNvdXJjZXMiOlsiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9saWIvYXV0aC9taWRkbGV3YXJlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlVXNlcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHRva2VuID0gY29va2llcygpLmdldCgndG9rZW4nKT8udmFsdWU7XG4gIFxuICBpZiAoIXRva2VuKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGRlY29kZWQgPSB2ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQhKTtcbiAgICByZXR1cm4gZGVjb2RlZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgdG9rZW4nIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZUFkbWluKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0ZVVzZXIocmVxdWVzdCk7XG4gIFxuICBpZiAoKHVzZXIgYXMgYW55KS5yb2xlICE9PSAnYWRtaW4nKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGb3JiaWRkZW4nIH0sIHsgc3RhdHVzOiA0MDMgfSk7XG4gIH1cbiAgXG4gIHJldHVybiB1c2VyO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInZlcmlmeSIsImNvb2tpZXMiLCJhdXRoZW50aWNhdGVVc2VyIiwicmVxdWVzdCIsInRva2VuIiwiZ2V0IiwidmFsdWUiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJkZWNvZGVkIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJhdXRoZW50aWNhdGVBZG1pbiIsInVzZXIiLCJyb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth/middleware.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fevents%2Froute&page=%2Fapi%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fevents%2Froute&page=%2Fapi%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_runner_workspace_app_api_events_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/events/route.ts */ \"(rsc)/./app/api/events/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/events/route\",\n        pathname: \"/api/events\",\n        filename: \"route\",\n        bundlePath: \"app/api/events/route\"\n    },\n    resolvedPagePath: \"/home/runner/workspace/app/api/events/route.ts\",\n    nextConfigOutput,\n    userland: _home_runner_workspace_app_api_events_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjRfcmVhY3QtZG9tQDE5LjEuMF9yZWFjdEAxOS4xLjBfX3JlYWN0QDE5LjEuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZldmVudHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmV2ZW50cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmV2ZW50cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGcnVubmVyJTJGd29ya3NwYWNlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGcnVubmVyJTJGd29ya3NwYWNlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNGO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9hcGkvZXZlbnRzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ldmVudHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9ldmVudHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2V2ZW50cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL3J1bm5lci93b3Jrc3BhY2UvYXBwL2FwaS9ldmVudHMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fevents%2Froute&page=%2Fapi%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0","vendor-chunks/semver@7.7.1","vendor-chunks/jsonwebtoken@9.0.2","vendor-chunks/lodash.includes@4.3.0","vendor-chunks/jws@3.2.2","vendor-chunks/lodash.once@4.1.1","vendor-chunks/jwa@1.4.1","vendor-chunks/lodash.isinteger@4.0.4","vendor-chunks/ecdsa-sig-formatter@1.0.11","vendor-chunks/lodash.isplainobject@4.0.6","vendor-chunks/ms@2.1.3","vendor-chunks/lodash.isstring@4.0.1","vendor-chunks/lodash.isnumber@3.0.3","vendor-chunks/lodash.isboolean@3.0.3","vendor-chunks/safe-buffer@5.2.1","vendor-chunks/buffer-equal-constant-time@1.0.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fevents%2Froute&page=%2Fapi%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();